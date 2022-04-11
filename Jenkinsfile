pipeline{
    agent { label 'frontend-node' }
    tools { nodejs 'node-14.18.3' }
    
    environment {
        //Mandatory
        REPO_NAME = 'dcs-frontend' // repo-name
        PACKAGE_MANAGER = 'yarn' // yarn
        BUILD_COMMAND = 'yarn build'  // yarn generate
        //Enviroment Varibles below:
        
        //ENV_NAME = 'value'
	BASE_URL='/dcs-frontend/'
	SITE_TITLE='Decentralized Cloud Storage | powered by LCube Studios'

        //SECRET ENV 
	//ENV_NAME = credentials('jenkins_env_id')
	
	//WEB 3.0
        IPFS_DEPLOY_CLOUDFLARE__API_KEY = credentials('cloudflare-api')
        IPFS_DEPLOY_CLOUDFLARE__API_EMAIL = credentials('cloudflare-email')
        IPFS_DEPLOY_CLOUDFLARE__ZONE='lcubestudios.io'
	IPFS_DEPLOY_CLOUDFLARE__RECORD='${REPO_NAME}'
        
        //Do not modify
        APACHE_DIR = '/var/www/html'
        SNYK_ID = 'lcube-snyk-token'
        JK_WORKSPACE = '/var/www/jenkins/workspace'
    }
   stages{
        stage("build") {
            steps {
                echo "building the application on ${NODE_NAME}."
                slackSend color: "warning", message: "Starting build process for ${REPO_NAME} from ${BRANCH_NAME} branch..."
                sh 'cd ${JK_WORKSPACE}/${REPO_NAME}_${BRANCH_NAME} && ${PACKAGE_MANAGER} && ${BUILD_COMMAND}'
                sh "if [ ! -d ${APACHE_DIR}/${BRANCH_NAME}/${REPO_NAME}/ ]; then mkdir -p ${APACHE_DIR}/${BRANCH_NAME}/${REPO_NAME}/; fi"
                sh "rsync -Puqr --delete-during ${JK_WORKSPACE}/${REPO_NAME}_${BRANCH_NAME}/dist/ ${APACHE_DIR}/${BRANCH_NAME}/${REPO_NAME}/"         
                slackSend color: "good", message: "Success building the application."
            }
        }
        stage("scan") {
            steps {
                echo 'Scanning code for vulnerabilities.'
                slackSend color: "warning", message: "Scanning code for vulnerabilities on ${REPO_NAME}/${BRANCH_NAME}..."
                snykSecurity(
                    snykInstallation: 'snyk-latest',
                    snykTokenId: "${SNYK_ID}",
                    failOnIssues: "false",
                )
                slackSend color: "good", message: "Success scanning the code."
            }
        }
	 stage("deploy") {
	    when{
		expression{
		    BRANCH_NAME == "master"
		}
	    }
	    steps {
		echo 'deploying the application.'
		slackSend color: "warning", message: "Deploying the application..."
		withCredentials([usernamePassword(credentialsId: 'infura-token', usernameVariable: 'IPFSUSERNAME', passwordVariable: 'IPFSPASSWORD')]) {
		    sh 'ipfs-upload-client --id ${IPFSUSERNAME} --secret ${IPFSPASSWORD} ${JK_WORKSPACE}/${REPO_NAME}_${BRANCH_NAME}/dist'
		} 
		sh 'npm install -g npm ipfs-deploy'
		sh 'cd ${JK_WORKSPACE}/${REPO_NAME}_${BRANCH_NAME} && ipd -O -C -p infura -d cloudflare dist'
		slackSend color: "good", message: "Success deploying master pipeline."
	    }
	}
    }
    post {
        success {
            echo 'The pipeline completed successfully.'
            slackSend color: "good", message: "The pipeline completed successfully. https://${BRANCH_NAME}.lcubestudios.io/${REPO_NAME}/"
        }
        failure {
            echo 'pipeline failed, at least one step failed'
            slackSend color: "danger", message: "Pipeline failed, at least one step failed. Check Jenkins console https://jenkins.lcubestudios.io/job/${REPO_NAME}/job/${BRANCH_NAME}/"
        }
    }      
}


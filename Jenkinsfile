pipeline {
    environment {
    registry = "projectsmanage4u/derivetech"
    registryCredential = 'DOCKER_HUB_PASSWORD'
    dockerImage = 'projectsmanage4u/derivetech'
    VERSION = "${BUILD_NUMBER}"
    BUILD_URL = 'http://derivetch.softdemonew.info:8080/job/derivetech-frontend/'
    }

    agent any
    stages {
            stage('Cloning our Git') {
                steps {
                    git branch: 'derivetech/live', credentialsId: 'Github_cred', url: 'https://github.com/jspanther/derivetech.git'
                }
            }

            stage('Building Docker Image') {
                steps {
                    script {
                        dockerImage = docker.build registry + ":$BUILD_NUMBER"
                    }
                }
            }

            stage('Deploying Docker Image to Dockerhub') {
                steps {
                    script {
                        docker.withRegistry('', registryCredential) {
                        dockerImage.push()
                        }
                    }
                }
            }
        
           stage('Deploying Docker Image to pull on server') {
                steps {
                    script {
                        docker.withRegistry('', registryCredential) {
                        dockerImage.pull()
                        }
                    }
                }
            }

           stage('Docker run on server') {
                steps {
                    script {
                        sshagent(['server']) {
                            containerExists = sh(script: "docker inspect -f '{{.State.Running}}'derivetech",returnStatus: true) == 0
                            sh "docker stop derivetech || true"
                            sh "docker rm derivetech  || true"
                            sh "docker run -d -p 3040:3040 --name derivetech projectsmanage4u/derivetech:${env.BUILD_NUMBER}"
                            sh "docker rmi --force $registry:$BUILD_NUMBER"
                            logs: "docker.image('derivetech').inside"
                            sh 'docker logs derivetech'
                            sh 'docker update --restart always derivetech'

                        }
                    }
                }
            }
        }
post {
        always{
            echo 'This will always run'    
        }
        success {
            echo 'This will run only if successful'
            emailext attachLog: true, body: """<b><big>derivetech</big></b><br>\n<br><b>Build Number:</b> ${env.BUILD_NUMBER} <br><b>URL build:</b> ${env.BUILD_URL}<br>""", recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], from: '', mimeType: 'text/html', replyTo: '', subject: "derivetech Build Success: ${currentBuild.fullDisplayName}", to:"rahul.singh@123789.org, robin.goyal@123789.org, ravi.kumar@nethues.com"
        }
        failure {
            echo  ' failed '
            emailext attachLog: true, body: """<b><big>derivetech</big></b><br>\n<br><b>Build Number:</b> ${env.BUILD_NUMBER} <br><b>URL build:</b> ${env.BUILD_URL}<br>""", recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], from: '', mimeType: 'text/html', replyTo: '', subject: "derivetech Build Failure: ${currentBuild.fullDisplayName}", to:"rahul.singh@123789.org, robin.goyal@123789.org, ravi.kumar@nethues.com"
                  }
        unstable {
            echo 'This will run only if the run was marked as unstable'
        }
        changed {
            echo 'This will run only if the state of the Pipeline has changed'
            echo 'For example, if the Pipeline was previously failing but is now successful'
        }
    }
}
        

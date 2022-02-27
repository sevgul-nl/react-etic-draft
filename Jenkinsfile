pipeline {
    agent any
    environment {
        registry = 'sevgulnl/react-etic-draft'
        HOME = '.'
    }
    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:16'
                }
            }
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            agent {
                docker {
                    image 'node:16'
                }
            }
            steps {  sh 'npm run test'  }
        }
        stage('Publish') {
            environment {   registryCredential = 'dockerhub'  }
            steps {
                script {
                    //sh 'docker stop $(docker ps -aqf "name=sevgulnl/snl-vue") && docker container prune -f -v $(docker ps -aqf "name=sevgulnl/snl-vue")'
                    //sh 'docker image prune -f -v $(docker ps -aqf "name=sevgulnl/snl-vue")'

                    def appimage = docker.build registry + ":$BUILD_NUMBER"
                    docker.withRegistry( '', registryCredential ) {
                        appimage.push()
                        appimage.push('latest')
                    }
                }
            }
        }
        //stage('Run') {
    //   steps {
    //        script {
    //            sh 'docker run -d -p 2200:2200 --rm --name etic-draft sevgulnl/react-etic-draft'
    //        }
    //    }
    //}
    }
}

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
                sh 'npm  build'
            }
        }
        stage('Test') {
            agent {
                docker {
                    image 'node:16'
                }
            }
            steps {  sh 'npm test'  }
        }
    }
}

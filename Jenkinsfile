pipeline {
    agent {
        label 'node02'
    }

    stages {
        stage('Checkout Repo') {
            steps {
                checkout scm
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker compose build'
            }
        }
        stage('Scan code with SonarQube') {
            steps {
                echo 'TODO'
            }
        }
        stage('Push Docker Image to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'somkiat_docker'
                , passwordVariable: 'DOCKER_PASS', usernameVariable: 'DOCKER_USER')]) {
                    sh 'docker login -u $DOCKER_USER -p $DOCKER_PASS'
                    sh '''docker image tag somkiat/frontend:1.0 somkiat/frontend2:$BUILD_NUMBER
                          docker image push somkiat/frontend2:$BUILD_NUMBER'''
                }        
            }
        }
    }
    post {
        always {
            sh 'docker compose down'
        }
    }
}

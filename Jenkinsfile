pipeline {
    agent any

    environment {
        DOCKER_COMPOSE = 'docker-compose'
    }

    stages {
        stage('Clone') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            parallel {
                stage('Frontend') {
                    steps {
                        dir('frontend') {
                            bat 'npm install'
                        }
                    }
                }
                stage('Backend') {
                    steps {
                        dir('backend') {
                            bat 'npm install'
                        }
                    }
                }
            }
        }

        stage('Run Tests') {
            parallel {
                stage('Frontend Tests') {
                    steps {
                        dir('frontend') {
                            bat 'npm test -- --watchAll=false'
                        }
                    }
                }
                stage('Backend Tests') {
                    steps {
                        dir('backend') {
                            bat 'npm test'
                        }
                    }
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                bat "${DOCKER_COMPOSE} build"
            }
        }

        stage('Deploy') {
            steps {
                bat "${DOCKER_COMPOSE} up -d --build"
            }
        }
    }

    post {
        always {
            bat "${DOCKER_COMPOSE} logs"
        }
        failure {
            bat "${DOCKER_COMPOSE} down"
        }
    }
} 
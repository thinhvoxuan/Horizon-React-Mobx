NAME = horizon-react-mobx
VERSION = 1.0

dev_up:
	docker-compose up -d

ps:
	docker-compose ps

stop:
		docker stop $$(docker ps -a -q)

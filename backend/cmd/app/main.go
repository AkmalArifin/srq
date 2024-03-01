package main

import (
	"example/srq/backend/internal/app"
	"example/srq/backend/internal/config"
	"example/srq/backend/internal/database"
)

func init() {
	config.GetEnvVariables()
	database.ConnectDatabase()
}

func main() {
	app.App()
}

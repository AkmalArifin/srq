package main

import (
	"example/srq/backend/internal/app"
	"fmt"
)

func main() {
	message := app.PrintHello("Ikan")
	fmt.Println(message)
}

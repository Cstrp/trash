package main

import (
	"fmt"
)

func main() {
	channel := make(chan int)
	go sayHello("Hello Go... !!!", channel)

	fmt.Println(<-channel)

	for data := range channel {
		fmt.Println(data)
	}

}

func sayHello(greeting string, channel chan int) {
	fmt.Println(greeting)

	channel <- 1337

	for i := 0; i < 10; i++ {
		channel <- i + 1
	}

	close(channel)

}

package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"time"
)

func main() {
	file := createFile("test.txt")
	defer file.Close()

	scanner := bufio.NewScanner(os.Stdin)

	writeStream(scanner, file)

	fmt.Println("Data written to the file.")

	time.Sleep(2 * time.Second)
}

func createFile(fileName string) *os.File {
	file, err := os.Create(fileName)
	if err != nil {
		log.Fatal(err)
		os.Exit(1)
	}
	return file
}

func writeStream(scanner *bufio.Scanner, file *os.File) {
	for scanner.Scan() {
		input := scanner.Text()
		if input == "" {
			break
		}
		_, err := file.WriteString(input + "\n")
		if err != nil {
			log.Fatal(err)
			os.Exit(1)
		}
	}

	if err := scanner.Err(); err != nil {
		log.Fatal(err)
		os.Exit(1)
	}
}

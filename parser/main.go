package main

import (
	"bufio"
	"bytes"
	"encoding/json"
	"fmt"
	"github.com/PuerkitoBio/goquery"
	"io"
	"log"
	"net/http"
	"os"
	"strings"
)

type Article struct {
	Title       string   `json:"title"`
	Description string   `json:"description"`
	Links       []string `json:"links"`
}

func main() {
	reader := bufio.NewReader(os.Stdin)

	fmt.Print("Enter the URL: ")
	url, _ := reader.ReadString('\n')
	url = strings.TrimSpace(url)

	fmt.Print("Enter the output filename (press Enter to use default 'output.json'): ")
	output, _ := reader.ReadString('\n')
	output = strings.TrimSpace(output)
	if output == "" {
		output = "output.json"
	}

	body, err := downloadPage(url)
	if err != nil {
		log.Fatal(err)
	}

	article, err := parseArticle(body)
	if err != nil {
		log.Fatal(err)
	}

	err = saveArticle(article, output)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Parsing completed!")
}
func downloadPage(url string) ([]byte, error) {
	response, err := http.Get(url)

	if err != nil {
		return nil, err
	}

	defer response.Body.Close()

	body, err := io.ReadAll(response.Body)

	if err != nil {
		return nil, err
	}

	return body, nil
}

func parseArticle(body []byte) (*Article, error) {
	doc, err := goquery.NewDocumentFromReader(bytes.NewReader(body))

	if err != nil {
		return nil, err
	}

	article := &Article{}

	article.Title = doc.Find("h1").Text()
	article.Description = doc.Find("p").First().Text()

	return article, nil
}

func saveArticle(article *Article, filename string) error {
	file, err := os.Create(filename)

	if err != nil {
		return err
	}

	defer file.Close()

	encoder := json.NewEncoder(file)
	encoder.SetIndent("", " ")

	err = encoder.Encode(article)

	if err != nil {
		return err
	}

	return nil
}

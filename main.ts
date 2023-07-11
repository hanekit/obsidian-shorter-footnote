import { Plugin } from "obsidian";

export default class ExamplePlugin extends Plugin {
  async onload() {
    this.registerMarkdownPostProcessor((element, context) => {
      const elements = element.querySelectorAll("a[class='footnote-link']");
      elements.forEach(function(element) {
        var text = element.textContent;
        var modifiedText = text.replace(/\[(\d+)-\d+\]/g, '[$1]');
        element.textContent = modifiedText;
      });
    });
  }
}
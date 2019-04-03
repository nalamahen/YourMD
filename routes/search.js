const express = require("express");
const router = express.Router();
const fs = require("fs");
const LineByLineReader = require("line-by-line");
const { filterInput, compareWords } = require("../processInput");

router.get("/", (req, res) => {
  const lineReader = new LineByLineReader("phrases.txt");
  const result = [];
  const inputText = req.query.text;

  if (!inputText) return res.status(400).send("No search term included");

  const filteredInput = filterInput(inputText);

  lineReader.on("error", err => {
    // 'err' contains error object
    res.send(err);
  });

  lineReader.on("line", line => {
    // 'line' contains the current line without the trailing newline character.
    if (compareWords(filteredInput, line)) {
      result.push(line);
    }
  });

  lineReader.on("end", () => {
    // All lines are read, file is closed now.
    res.send(result);
    console.log("end");
  });
});

module.exports = router;

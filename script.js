<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Discover your RDA Persona</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div id="page1" class="page active">
            <h1>Discover your RDA Persona</h1>
            <p>Take this quick quiz to find out which RDA Persona you are. Click "Start" to begin!</p>
            <button onclick="nextPage(2)">Start</button>
        </div>
        <div id="page2" class="page">
            <h3>1. How long have you been part of the RDA community?</h3>
            <label class="option"><input type="radio" name="q1" value="1"> Just joined</label>
            <label class="option"><input type="radio" name="q1" value="2"> 1-2 years</label>
            <label class="option"><input type="radio" name="q1" value="3"> 3-5 years</label>
            <label class="option"><input type="radio" name="q1" value="4"> More than 5 years</label>
            <button onclick="nextPage(3)">Next</button>
        </div>
        <div id="page3" class="page">
            <h3>2. How many RDA Plenaries have you attended?</h3>
            <label class="option"><input type="radio" name="q2" value="1"> None</label>
            <label class="option"><input type="radio" name="q2" value="2"> 1-2</label>
            <label class="option"><input type="radio" name="q2" value="3"> 3-5</label>
            <label class="option"><input type="radio" name="q2" value="4"> More than 5</label>
            <button onclick="nextPage(4)">Next</button>
        </div>
        <div id="page4" class="page">
            <h3>3. Can you distinguish between a Working Group (WG), Interest Group (IG), and Community of Practice (COP) in the RDA context?</h3>
            <label class="option"><input type="radio" name="q3" value="1"> Not sure</label>
            <label class="option"><input type="radio" name="q3" value="2"> Somewhat</label>
            <label class="option"><input type="radio" name="q3" value="3"> Fairly well</label>
            <label class="option"><input type="radio" name="q3" value="4"> Very well</label>
            <button onclick="calculateResults()">Submit</button>
        </div>
        <div id="result" class="page">
            <h3>Your Result:</h3>
            <p id="resultText"></p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>

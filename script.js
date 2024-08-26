function showColors(season) {
    const colorSelection = document.getElementById('color-selection');
    colorSelection.style.display = 'block';

    // Hide season selection
    document.getElementById('season-selection').style.display = 'none';

    // Clear previous color options
    const colorButtons = colorSelection.querySelectorAll('button');
    colorButtons.forEach(button => button.style.display = 'none');

    // Show color options based on selected season
    switch (season) {
        case 'spring':
            document.querySelector('button[onclick="showResult(\'pink\')"]').style.display = 'inline-block';
            document.querySelector('button[onclick="showResult(\'lightgreen\')"]').style.display = 'inline-block';
            break;
        case 'summer':
            document.querySelector('button[onclick="showResult(\'yellow\')"]').style.display = 'inline-block';
            document.querySelector('button[onclick="showResult(\'green\')"]').style.display = 'inline-block';
            break;
        case 'fall':
            document.querySelector('button[onclick="showResult(\'brown\')"]').style.display = 'inline-block';
            document.querySelector('button[onclick="showResult(\'red\')"]').style.display = 'inline-block';
            break;
        case 'winter':
            document.querySelector('button[onclick="showResult(\'blue\')"]').style.display = 'inline-block';
            document.querySelector('button[onclick="showResult(\'white\')"]').style.display = 'inline-block';
            break;
    }
}

function showResult(color) {
    const resultText = document.getElementById('result-text');
    const resultImage = document.getElementById('result-image');
    let resultMessage;
    let imageUrl;

    switch (color) {
        case 'pink':
            resultMessage = '벚꽃';
            imageUrl = 'images/cherry_blossom.png'; // 이미지 파일 경로
            break;
        case 'lightgreen':
            resultMessage = '새싹';
            imageUrl = 'images/sprout.png'; // 이미지 파일 경로
            break;
        case 'yellow':
            resultMessage = '개나리';
            imageUrl = 'images/forsythia.png'; // 이미지 파일 경로
            break;
        case 'green':
            resultMessage = '산';
            imageUrl = 'images/mountain.png'; // 이미지 파일 경로
            break;
        case 'brown':
            resultMessage = '나무';
            imageUrl = 'images/tree.png'; // 이미지 파일 경로
            break;
        case 'red':
            resultMessage = '단풍';
            imageUrl = 'images/maple_leaf.png'; // 이미지 파일 경로
            break;
        case 'blue':
            resultMessage = '바다';
            imageUrl = 'images/ocean.png'; // 이미지 파일 경로
            break;
        case 'white':
            resultMessage = '눈';
            imageUrl = 'images/snow.png'; // 이미지 파일 경로
            break;
    }

    document.getElementById('result').style.display = 'block';
    document.getElementById('color-selection').style.display = 'none';
    resultText.textContent = resultMessage;
    resultImage.src = imageUrl;
}

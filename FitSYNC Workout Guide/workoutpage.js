function calculateWorkoutSplit() {
    var loadingSpinner = document.getElementById('loadingSpinner');
    loadingSpinner.style.display = 'block';
    var selectedGender = document.querySelector('.genderOptions .highlight').innerText.trim();
    var selectedFrequency = parseInt(document.querySelector('.exerciseFrequency .highlight').innerText);

    var workoutSplit = {};

    if (selectedGender === 'Male') {
        if (selectedFrequency === 3) {
            workoutSplit = {
                'Monday': 'Chest & Back',
                'Tuesday': 'Biceps, Triceps, Shoulders',
                'Wednesday': 'Legs'
            };
        } else if (selectedFrequency === 4) {
            workoutSplit = {
                'Monday': 'Chest & Back',
                'Tuesday': 'Biceps, Triceps',
                'Wednesday': 'Shoulders',
                'Thursday': 'Legs'
            };
        } else if (selectedFrequency === 6) {
            workoutSplit = {
                'Monday': 'Chest & Back',
                'Tuesday': 'Biceps, Triceps, Shoulders',
                'Wednesday': 'Legs',
                'Thursday': 'Chest & Back',
                'Friday': 'Biceps, Triceps, Shoulders',
                'Saturday': 'Legs'
            };
        }
    } else if (selectedGender === 'Female') {
        if (selectedFrequency === 3) {
            workoutSplit = {
                'Monday': 'Glutes',
                'Tuesday': 'Quads',
                'Wednesday': 'Full Legs'
            };
        } else if (selectedFrequency === 4) {
            workoutSplit = {
                'Monday': 'Glutes',
                'Tuesday': 'Quads',
                'Wednesday': 'Full Legs',
                'Thursday': 'Chest & Back'
            };
        } else if (selectedFrequency === 6) {
            workoutSplit = {
                'Monday': 'Glutes',
                'Tuesday': 'Quads',
                'Wednesday': 'Chest & Back',
                'Thursday': 'Biceps, Triceps, Shoulders',
                'Friday': 'Glutes & Quads',
                'Saturday': 'Glutes'
            };
        }
    }

    var workoutSplitContainer = document.getElementById('workoutSplitContainer');
    workoutSplitContainer.innerHTML = '<h3>Your Workout Split:</h3>';

    for (var day in workoutSplit) {
        var workoutEntry = document.createElement('div');
        workoutEntry.className = 'workoutEntry'; // Corrected the class name
    
        // Create an anchor element for each day and set its attributes
        var dayLink = document.createElement('a');
        dayLink.href = getDayURL(day);
        dayLink.textContent = day;
    
        // Append the anchor element to the workoutEntry div
        workoutEntry.appendChild(dayLink);
    
        // Add the rest of the content to the workoutEntry div
        workoutEntry.innerHTML += ': ' + workoutSplit[day];
    
        // Append the workoutEntry div to the workoutSplitContainer
        workoutSplitContainer.appendChild(workoutEntry);
    }
    

    setTimeout(function () {
        loadingSpinner.style.display = 'none';
        workoutSplitContainer.style.border = '2px solid #1E3050';
        workoutSplitContainer.style.borderRadius = '10px';
        workoutSplitContainer.style.padding = '15px';
        workoutSplitContainer.style.marginTop = '20px';

        // Add styling to each workout entry
        var workoutEntries = document.querySelectorAll('.workoutEntry');
        workoutEntries.forEach(function (entry) {
            entry.style.margin = '10px 0';
            entry.style.fontWeight = 'bold';
            entry.style.fontSize = '18px';
            entry.style.color = '#1E3050';
        });
    }, 0);
}
function toggleHighlight(buttonId, category) {
    var button = document.getElementById(buttonId);
    button.classList.toggle('highlight');

    // Clear highlighting for other buttons in the same category
    var otherButtons = document.querySelectorAll('.' + category + ' .button');
    otherButtons.forEach(function (otherButton) {
        if (otherButton.id !== buttonId) {
            otherButton.classList.remove('highlight');
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.goButton .button').addEventListener('click', calculateWorkoutSplit);
        calculateWorkoutSplit();
    });;
    function getDayURL(day) {
        return day.toLowerCase() + 'monday.html';
    }


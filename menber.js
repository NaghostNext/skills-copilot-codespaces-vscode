function skillsMember() {
    var skills = document.getElementById('skills');
    var skill = document.createElement('div');
    skill.className = 'skill';
    var skillName = document.createElement('input');
    skillName.type = 'text';
    skillName.className = 'skillName';
    skill.appendChild(skillName);
    var skillLevel = document.createElement('input');
    skillLevel.type = 'number';
    skillLevel.className = 'skillLevel';
    skill.appendChild(skillLevel);
    var skillButton = document.createElement('button');
    skillButton.textContent = 'x';
    skillButton.className = 'skillButton';
    skillButton.onclick = function() {
        skills.removeChild(skill);
    };
    skill.appendChild(skillButton);
    skills.appendChild(skill);
} 
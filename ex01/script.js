function calculateGrade(score) {
    if (typeof score !== "number" || Number.isNaN(score) || score < 0 || score > 100) {
        return "Invalid";
    }
    if (score >= 90) {
        return "A";
    }
    if (score >= 80) {
        return "B";
    }
    if (score >= 70) {
        return "C";
    }

    
    if (score >= 60) {
        return "D";
    }

     if (score >= 50) {
        return "D-";
    }
    return "F";
}

function checkAccess(age, hasTicket) {
    if (typeof age !== "number" || Number.isNaN(age) || age < 0) {
        return false;
    }
    return age >= 18 && hasTicket === true;
}
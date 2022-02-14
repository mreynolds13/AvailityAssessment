var lispCode = `(defun -reverse (list)
(let ((return-value))
  (dolist (e list) (push e return-value))
  return-value))`;

var properClosings = "((((())))) code not properly nested"

var missingClosings = `(defun -reverse (list)
(let ((return-value))
  (dolist (e list) (push e return-value)
  return-value)`;


function lispChecker(lispString) {
  if (checkOpenAndCloseNumber(lispString)) {
    if (checkFirstAndLast(lispString)) {
      console.log("all parenthese are properly closed and nested")
    }
    else {
      console.log("all parentheses are properly closed but code is not properly nested")
    }
  }
  else {
    console.log("not all parantheses are properly closed")
  }

}

function checkOpenAndCloseNumber(lisp) {
  var openParenCount = 0;
  var closeParenCount = 0;
  for (var i = 0; i < lisp.length; i++ ) {
    if (lisp[i] == "(") {
      openParenCount++;
    }
    if (lisp[i] == ")") {
      closeParenCount++;
    }
  }
  if (openParenCount == closeParenCount) {
    return true;
  } else {
    return false;
  }
}

function checkFirstAndLast(lisp) {
  let firstIndex = 0;
  let lastIndex = lisp.length -1;
  if (lisp.charAt(firstIndex) == "(" && lisp.charAt(lastIndex) == ")") {
    return true;
  } else {
    return false;
  }
}

console.log("Correct LISP Code")
lispChecker(lispCode)

console.log("Correct closings but wrong nesting")
lispChecker(properClosings)

console.log("Missing CLosings")
lispChecker(missingClosings)
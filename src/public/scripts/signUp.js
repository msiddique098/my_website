// signup.js
document.getElementById('submitSignUp').addEventListener('click', async function (e) {
    e.preventDefault();  // Prevent form from refreshing the page
  
    const formData = {
      firstname: document.getElementById('firstName').value,
      lastname: document.getElementById('lastName').value,
      email: document.getElementById('staticEmail').value,
      password: document.getElementById('password').value,
      confirmPassword: document.getElementById('confirmPassword').value
    };
  
    try {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      const result = await response.json();
      if (response.ok) {
        alert(result.msg);  // Success message
        document.getElementById('signupForm').reset();  // Reset form after successful submission
      } else {
        alert(result.errors ? result.errors[0].msg : result.msg);  
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
  
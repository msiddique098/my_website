document.getElementById('logIn-Modal').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    const email = document.getElementById('staticLoginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const messageDiv = document.getElementById('loginMessage');
  
    // Clear previous messages
    messageDiv.style.display = 'none';
    messageDiv.className = 'alert'; // Reset classes
  
    // Validate the form fields
    if (!email || !password) {
      messageDiv.classList.add('alert-error');
      messageDiv.textContent = 'Please fill in all fields.';
      messageDiv.style.display = 'block';
      return;
    }
  
    try {
      const response = await fetch('/logIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      // Display appropriate message based on response
      if (response.ok) {
        messageDiv.classList.add('alert-success');
        messageDiv.textContent = 'Login successful! Redirecting...';
        messageDiv.style.display = 'block';
  
        // Redirect after a delay
        setTimeout(() => {
          window.location.href = '/'; // Redirect to the desired page
        }, 2000);
      } else {
        messageDiv.classList.add('alert-error');
        messageDiv.textContent = data.msg || 'Login failed. Please try again.';
        messageDiv.style.display = 'block';
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      messageDiv.classList.add('alert-error');
      messageDiv.textContent = 'An unexpected error occurred. Please try again later.';
      messageDiv.style.display = 'block';
    }
  });
  
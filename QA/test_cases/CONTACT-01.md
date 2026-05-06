- **Test Case ID:** CONTACT-01
- **Title:** Filling all the fields of the contact form with valid data
- **Pre-condition:** Navigate to contact section.
- **Test Steps:**
  1. enter valid name.
  2. enter valid email.
  3. enter valid phone.
  4. enter valid message.
  5. press submit.
- **Expected Result:** 
  1. an successfull message says "شكراً لك. سأرد عليك في أقرب وقت ممكن." appeared
  2. email sent successfully
- **Test Data:**
  - name: musab
  - email: musab@gmail.com
  - phone: +970599123456
  - message: I have developed a website and I want you to test it
- **Actual Result:** 
  1. an error message says "عذراً، حدث خطأ ما. يرجى المحاولة مرة أخرى." appeared
  2. no email sended 
- **Status:** failed
- **Comments:** 
  musab abu bshara (QA) : I guess that the problem is that the env values are not working in production


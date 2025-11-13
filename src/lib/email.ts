export const sendEmail = async (formData: any) => {
  const formDataToSend = new FormData();
  
  formDataToSend.append('_subject', `New Admission Application - ${formData.childName}`);
  formDataToSend.append('childName', formData.childName);
  formDataToSend.append('age', formData.age || formData.childAge);
  formDataToSend.append('parentName', formData.parentName);
  formDataToSend.append('phone', formData.phone);
  formDataToSend.append('email', formData.email);
  formDataToSend.append('address', formData.address);
  formDataToSend.append('notes', formData.notes || formData.medicalConditions || '');
  formDataToSend.append('timestamp', new Date().toLocaleString());

  try {
    await fetch('https://formsubmit.co/ai.iris21.11@gmail.com', {
      method: 'POST',
      body: formDataToSend
    });
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
export const saveToGoogleSheets = async (formData: any) => {
  const scriptUrl = 'https://script.google.com/macros/s/AKfycbyEZst6Wq7NJOnTqTwXXGKNggm5HfZmJ0wywFfG9qwYiPFp7nTC52MH_-9zJ_xO36Qi/exec'; // Replace with the URL from step 5
  
  const formDataToSend = new FormData();
  formDataToSend.append('childName', formData.childName);
  formDataToSend.append('age', formData.age || formData.childAge);
  formDataToSend.append('parentName', formData.parentName);
  formDataToSend.append('phone', formData.phone);
  formDataToSend.append('email', formData.email);
  formDataToSend.append('address', formData.address);
  formDataToSend.append('notes', formData.notes || formData.medicalConditions || '');
  formDataToSend.append('timestamp', new Date().toISOString());
  
  try {
    await fetch(scriptUrl, {
      method: 'POST',
      body: formDataToSend
    });
  } catch (error) {
    console.error('Error saving to Google Sheets:', error);
  }
};
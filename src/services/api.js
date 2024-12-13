export const fetchSkills = async () => {
  try {
    const response = await fetch('https://http5222-3prr.onrender.com/skills');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data.skills;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export const fetchProjects = async () => {
  try {
    const response = await fetch('https://http5222-3prr.onrender.com/projects');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data.projects;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export const submitContactForm = async (formData) => {
  try {
    const response = await fetch('https://http5222-3prr.onrender.com/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

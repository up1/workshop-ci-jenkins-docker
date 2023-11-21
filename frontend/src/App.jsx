import { useState, useEffect } from 'react';

function App() {
  const [merchants, setMerchants] = useState(false);

  function getMerchant() {
    fetch('/api/')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setMerchants(data);
      });
  }

  function createMerchant() {
    let name = prompt('Enter merchant name');
    let email = prompt('Enter merchant email');
    fetch('/api/merchants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getMerchant();
      });
  }

  function deleteMerchant() {
    let id = prompt('Enter merchant id');
    fetch(`/api/merchants/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getMerchant();
      });
  }

  function updateMerchant() {
    let id = prompt('Enter merchant id');
    let name = prompt('Enter new merchant name');
    let email = prompt('Enter new merchant email');
    fetch(`/api/merchants/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getMerchant();
      });
  }

  useEffect(() => {
    getMerchant();
  }, []);
  return (
    <div>
      {merchants ? merchants : 'There is no merchant data available'}
      <br /><br />
      <button onClick={createMerchant}>Add New merchant...</button>
      <br />
      <button onClick={deleteMerchant}>Delete merchant</button>
      <br />
      <button onClick={updateMerchant}>Update merchant</button>
    </div>
  );
}
export default App;
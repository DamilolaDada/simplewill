const getAllAccounts = () => {
  try {
    const table = document.getElementById("table")
    axios.get("http://localhost:4000/admin")
      .then(({ data }) => {
        for (const item of data) {
          const user = `
            <tr>
              <td>${item._id}</td>
              <td>${item.person_name}</td>
              <td>${item.person_email}</td>
              <td>${item.asset_details.person_rsa}</td>
            </tr>
          `

          table.insertAdjacentHTML("beforeend", user)
        }
      })
      .catch(e => console.log(e))
  } catch (e) {
    console.log(e)
  }
}

getAllAccounts()
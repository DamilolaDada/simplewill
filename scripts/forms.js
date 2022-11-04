function transformData(inputArr) {
  const dataObj = {}
  for (const input of inputArr) {
    dataObj[input.name] = input.type === "number" ? Number(input.value) : input.value
  }

  return dataObj
}

async function handleFormSubmit(e) {
  e.preventDefault()
  const personalDetailsEl = document.getElementById("personal_info")
  const assetDetailsEl = document.getElementById("asset_details")
  const spouseAndBeneficiariesDetailsEl = document.getElementById("beneficiaries_details")

  // Handle Person Details Fields
  const [personalDetailsInputFields, personalDetailsSelectFields] = [
    personalDetailsEl.querySelectorAll("input"),
    personalDetailsEl.querySelectorAll("select")
  ]

  const person_details = transformData(personalDetailsInputFields)
  Object.assign(person_details, transformData(personalDetailsSelectFields))


  // Handle Asset Details Fields
  const [assetDetailsInputFields, assetDetailsSelectFields] = [
    assetDetailsEl.querySelectorAll("input"),
    assetDetailsEl.querySelectorAll("select")
  ]

  const asset_details = transformData(assetDetailsInputFields)
  Object.assign(asset_details, transformData(assetDetailsSelectFields))


  // Handle Spouse And Beneficiaries Details Fields
  const [spouseAndBeneficiariesInputFields, spouseAndBeneficiariesDetailsSelectFields] = [
    spouseAndBeneficiariesDetailsEl.querySelectorAll("input"),
    spouseAndBeneficiariesDetailsEl.querySelectorAll("select")
  ]

  const spouse_and_beneficiaries_detailS = transformData(spouseAndBeneficiariesInputFields)
  Object.assign(spouse_and_beneficiaries_detailS, transformData(spouseAndBeneficiariesDetailsSelectFields))


  const registrationDetails = {
    asset_details,
    ...person_details,
    spouse_and_beneficiaries_detailS
  }

  try {
    const { data } = await axios.post("https://13b2-41-216-175-81.eu.ngrok.io/users/register", registrationDetails)
    if(data) {
      alert("Account Created")
    }
  } catch (e) {
    console.log(e)
  }
}
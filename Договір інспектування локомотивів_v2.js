function setControlRequired(code, required = true) {
  const control = EdocsApi.getControlProperties(code);
  control.required = required;
  EdocsApi.setControlProperties(control);
}
function setControlHidden(code, hidden = true) {
  const control = EdocsApi.getControlProperties(code);
  control.hidden = hidden;
  EdocsApi.setControlProperties(control);
}
function setControlDisabled(code, disabled = true) {
  const control = EdocsApi.getControlProperties(code);
  control.disabled = disabled;
  EdocsApi.setControlProperties(control);
}
function setValueAttr(code, value) {
  const attr = EdocsApi.getAttributeValue(code);
  attr.value = value;
  EdocsApi.setAttributeValue(attr);
}

//Скрипт 1. Зміна властивостей атрибутів
function onChangeCheckBranch(clearOnInit = false) {
  debugger;
  if (clearOnInit) {
  } else {
    if (EdocsApi.getAttributeValue("CheckBranch").value == "true") {
      setControlHidden("Branch", false);
      setControlHidden("BranchFullName", false);
      setControlHidden("BranchShortName", false);
      setControlHidden("BranchCode", false);
      setControlHidden("BranchEDRPOU", false);
      setControlHidden("BranchIPN", false);
      setControlHidden("VATStatusBranch", false);
      setControlHidden("VATPercentBranch", false);
      setControlHidden("LegaladdressBranch", false);
      setControlHidden("PostaddressBranch", false);
      setControlHidden("BankBranch", false);
      setControlHidden("MFIBranch", false);
      setControlHidden("AccountBranch", false);
      setControlHidden("TelephoneBranch", false);
      setControlHidden("EmailBranch", false);
      setControlHidden("BranchAgent", false);
      setControlHidden("BranchAgentPosition", false);
      setControlHidden("ActsOnBasisBranch", false);

      setControlRequired("Branch");
      setControlRequired("BranchFullName");
      setControlRequired("BranchShortName");
      setControlRequired("BranchCode");
      setControlRequired("BranchEDRPOU");
      setControlRequired("BranchIPN");
      setControlRequired("VATStatusBranch");
      setControlRequired("VATPercentBranch");
      setControlRequired("LegaladdressBranch");
      setControlRequired("PostaddressBranch");
      setControlRequired("BankBranch");
      setControlRequired("MFIBranch");
      setControlRequired("AccountBranch");
      setControlRequired("TelephoneBranch");
      setControlRequired("EmailBranch");
      setControlRequired("BranchAgent");
      setControlRequired("BranchAgentPosition");
      setControlRequired("ActsOnBasisBranch");
    } else {
      setControlHidden("Branch");
      setControlHidden("BranchFullName");
      setControlHidden("BranchShortName");
      setControlHidden("BranchCode");
      setControlHidden("BranchEDRPOU");
      setControlHidden("BranchIPN");
      setControlHidden("VATStatusBranch");
      setControlHidden("VATPercentBranch");
      setControlHidden("LegaladdressBranch");
      setControlHidden("PostaddressBranch");
      setControlHidden("BankBranch");
      setControlHidden("MFIBranch");
      setControlHidden("AccountBranch");
      setControlHidden("TelephoneBranch");
      setControlHidden("EmailBranch");
      setControlHidden("BranchAgent");
      setControlHidden("BranchAgentPosition");
      setControlHidden("ActsOnBasisBranch");

      setControlRequired("Branch", false);
      setControlRequired("BranchFullName", false);
      setControlRequired("BranchShortName", false);
      setControlRequired("BranchCode", false);
      setControlRequired("BranchEDRPOU", false);
      setControlRequired("BranchIPN", false);
      setControlRequired("VATStatusBranch", false);
      setControlRequired("VATPercentBranch", false);
      setControlRequired("LegaladdressBranch", false);
      setControlRequired("PostaddressBranch", false);
      setControlRequired("BankBranch", false);
      setControlRequired("MFIBranch", false);
      setControlRequired("AccountBranch", false);
      setControlRequired("TelephoneBranch", false);
      setControlRequired("EmailBranch", false);
      setControlRequired("BranchAgent", false);
      setControlRequired("BranchAgentPosition", false);
      setControlRequired("ActsOnBasisBranch", false);
    }
  }
}

function onCardInitialize() {
  debugger;
  onChangeCheckBranch();
}
//Скрипт 2. Вирахування ПДВ
function calculationOfSums() {
  debugger;
  let VATpercentage = 1;
  const attrServicesAmount = EdocsApi.getAttributeValue("ServicesAmount");
  const attrServicesVATPercent = EdocsApi.getAttributeValue("ServicesVATPercent");
  const attrServicesVATAmount = EdocsApi.getAttributeValue("ServicesVATAmount");
  const attrServicesAmountOutVAT = EdocsApi.getAttributeValue("ServicesAmountOutVAT");

  switch (attrServicesVATPercent.value) {
    case "20%":
      VATpercentage = 1.2;
      break;

    case "7%":
      VATpercentage = 1.07;
      break;
  }
  if (attrServicesAmount.value == null) {
    if (attrServicesVATPercent.value == null) {
      attrServicesAmountOutVAT.value = 0;
    } else {
      attrServicesAmountOutVAT.value == attrServicesAmount.value;
    }
    attrServicesVATAmount.value = 0;
  } else {
    attrServicesAmountOutVAT.value = (attrServicesAmount.value / VATpercentage).toFixed(2);
    attrServicesVATAmount.value = attrServicesAmount.value - attrServicesAmountOutVAT.value;
  }
  EdocsApi.setAttributeValue(attrServicesVATAmount);
  EdocsApi.setAttributeValue(attrServicesAmountOutVAT);
}

function onChangeServicesAmount() {
  debugger;
  if (CurrentDocument.executionState == "draft") {
    calculationOfSums();
    setAmountDescription();
  }
}

function onChangeServicesVATAmount() {
  if (CurrentDocument.executionState == "draft") {
    setAmountDescription();
  }
}
function onChangeServicesVATPercent() {
  if (CurrentDocument.executionState == "draft") {
    calculationOfSums();
  }
}

//Скрипт 3. Вирахування суми договору
function calculationContractAmount() {
  debugger;
  const attrServicesAmount = EdocsApi.getAttributeValue("ServicesAmount");
  let VATpercentage = 1;
  let contractAmount = 0;
  let contractVATAmount = 0;
  let contractOutVAT = 0;
  const attrNumberServices = EdocsApi.getAttributeValue("NumberServices");

  if (attrNumberServices.value && attrServicesAmount.value) {
    contractAmount = attrServicesAmount.value * attrNumberServices.value;
    contractOutVAT = (contractAmount / VATpercentage).toFixed(2);
    contractVATAmount = contractAmount - contractVATAmount;
  } else {
    contractAmount = 0;
    contractVATAmount = 0;
    contractOutVAT = 0;
  }

  setValueAttr("ContractAmount", contractAmount);
  setValueAttr("ContractVATAmount", contractVATAmount);
  setValueAttr("ContractOutVAT", contractOutVAT);
}

function onChangeNumberServices() {
  calculationContractAmount();
}

//Скрипт 4. Заповнення значення поля вартості послуг та суми ПДВ прописом
function setAmountDescription() {
  debugger;
  const attrServicesAmount = EdocsApi.getAttributeValue("ServicesAmount");
  const attrServicesVATAmount = EdocsApi.getAttributeValue("ServicesVATAmount");

  if (attrServicesAmount.value) {
    const textAttrServicesAmount = EdocsApi.numberToCurrency(attrServicesAmount.value, "uk", "UAH");
    setValueAttr("ServicesAmount", textAttrServicesAmount);
  } else {
    setValueAttr("ServicesAmount", "");
  }

  if (attrServicesVATAmount.value) {
    const textAttrServicesVATAmount = EdocsApi.numberToCurrency(attrServicesVATAmount.value, "uk", "UAH");
    setValueAttr("ServicesVATAmount", textAttrServicesVATAmount);
  } else {
    setValueAttr("ServicesVATAmount", "");
  }
}

//Скрипт 6. Заповнення інформації про додаткового підписанта
function setAdditionalSignatory() {
  debugger;

  const attrOrgAgentSurname2 = EdocsApi.getAttributeValue("OrgAgentSurname2");

  if (attrOrgAgentSurname2.value) {
    const OrganizationId = EdocsApi.getAttributeValue("OrganizationId").value;

    const data = EdocsApi.getContractorData(OrganizationId);

    if (data) {
      setValueAttr("OrgAgent2", data.authorisedPersons.find(x => x.fullName == EdocsApi.getAttributeValue("OrgAgentSurname2").text).nameGenitive);

      setValueAttr("OrgAgentPosition2", data.authorisedPersons.find(x => x.fullName == EdocsApi.getAttributeValue("OrgAgentSurname2").text).positionGenitive);

      setValueAttr("ActsOnBasisOrg2", data.authorisedPersons.find(x => x.fullName == EdocsApi.getAttributeValue("OrgAgentSurname2").text).actingUnderThe);
    }
  }
}

function onChangeOrgAgentSurname2() {
  setAdditionalSignatory();
}

//Скрипт 7. Передача договору на підписання в зовнішню систему
function setDataForESIGN() {
  debugger;
  var registrationDate = EdocsApi.getAttributeValue("RegDate").value;
  var registrationNumber = EdocsApi.getAttributeValue("RegNumber").value;
  var caseType = EdocsApi.getAttributeValue("DocType").value;
  var caseKind = EdocsApi.getAttributeValue("DocKind").text;
  var name = "";
  if (caseKind) {
    name += caseKind;
  } else {
    name += caseType;
  }
  name += " №" + (registrationNumber ? registrationNumber : CurrentDocument.id) + (!registrationDate ? "" : " від " + moment(registrationDate).format("DD.MM.YYYY"));
  doc = {
    DocName: name,
    extSysDocId: CurrentDocument.id,
    ExtSysDocVersion: CurrentDocument.version,
    docType: "locomotiveInspectionContract",
    docDate: registrationDate,
    docNum: registrationNumber,
    File: "",
    parties: [
      {
        taskType: "ToSign",
        taskState: "Done",
        legalEntityCode: EdocsApi.getAttributeValue("OrgCode").value,
        contactPersonEmail: EdocsApi.getAttributeValue("OrgRPEmail").value,
        signatures: [],
      },
      {
        taskType: "ToSign",
        taskState: "NotAssigned",
        legalEntityCode: EdocsApi.getAttributeValue("CheckBranch ").value ? EdocsApi.getAttributeValue("BranchEDRPOU").value : EdocsApi.getAttributeValue("ContractorEDRPOU").value,
        contactPersonEmail: EdocsApi.getAttributeValue("ContractorRPEmail").value,
        expectedSignatures: [],
      },
    ],
    additionalAttributes: [
      {
        code: "docDate",
        type: "dateTime",
        value: registrationDate,
      },
      {
        code: "docNum",
        type: "string",
        value: registrationNumber,
      },
    ],
    sendingSettings: {
      attachFiles: "fixed", //, можна також встановлювати 'firstOnly' - Лише файл із першої зафіксованої вкладки(Головний файл), або 'all' - всі файли, 'fixed' - усі зафіксовані
      attachSignatures: "signatureAndStamp", // -'signatureAndStamp'Типи “Підпис” або “Печатка”, можна також встановити 'all' - усі типи цифрових підписів
    },
  };
  EdocsApi.setAttributeValue({ code: "JSON", value: JSON.stringify(doc) });
}

function onTaskExecuteSendOutDoc(routeStage) {
  debugger;
  if (routeStage.executionResult == "rejected") {
    return;
  }
  setDataForESIGN();
  var idnumber = EdocsApi.getAttributeValue("DocId");
  var methodData = {
    extSysDocId: idnumber.value,
  };

  routeStage.externalAPIExecutingParams = {
    externalSystemCode: "ESIGN1", // код зовнішньої системи
    externalSystemMethod: "integration/importDoc", // метод зовнішньої системи
    data: methodData, // дані, що очікує зовнішня система для заданого методу
    executeAsync: true, // виконувати завдання асинхронно
  };
}

function onTaskCommentedSendOutDoc(caseTaskComment) {
  debugger;
  var orgCode = EdocsApi.getAttributeValue("OrgCode").value;
  var orgShortName = EdocsApi.getAttributeValue("OrgShortName").value;
  if (!orgCode || !orgShortName) {
    return;
  }
  var idnumber = EdocsApi.getAttributeValue("DocId");
  var methodData = {
    extSysDocId: idnumber.value,
    eventType: "CommentAdded",
    comment: caseTaskComment.comment,
    partyCode: orgCode,
    userTitle: CurrentUser.name,
    partyName: orgShortName,
    occuredAt: new Date(),
  };

  caseTaskComment.externalAPIExecutingParams = {
    externalSystemCode: "ESIGN1", // код зовнішньої системи
    externalSystemMethod: "integration/processEvent", // метод зовнішньої системи
    data: methodData, // дані, що очікує зовнішня система для заданого методу
    executeAsync: true, // виконувати завдання асинхронно
  };
}

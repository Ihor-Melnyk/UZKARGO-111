//Скрипт 1. Зміна властивостей атрибутів

function setControlRequired(code, required = true) {
  const control = EdocsApi.getControlProperties(code);
  control.required = required;
  EdocsApi.setControlProperties(code);
}
function setControlHidden(code, hidden = true) {
  const control = EdocsApi.getControlProperties(code);
  control.hidden = hidden;
  EdocsApi.setControlProperties(code);
}
function setControlDisabled(code, disabled = true) {
  const control = EdocsApi.getControlProperties(code);
  control.disabled = disabled;
  EdocsApi.setControlProperties(code);
}

function onChangeCheckBranch(clearOnInit = true) {
  if (clearOnInit) {
  } else {
    if (EdocsApi.getAttributeValue("CheckBranch").value) {
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

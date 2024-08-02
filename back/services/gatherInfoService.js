const { getDates } = require("./../utils/getDates");
const { getNames } = require("./../utils/getName");
const { getNationality } = require("./../utils/getNatinoality");
const { getDocumentNo } = require("./../utils/getDocumentNo");

exports.gatherInfoService = async (text) => {

    let identityCard = {};

    const dates = await getDates(text);
    const names = await getNames(text);
    const Nationality = await getNationality(text);
    const documentNo = await getDocumentNo(text);

    identityCard.dateOfBirth = dates[0] || null;
    identityCard.dateOfIssue = dates[1] || null;
    identityCard.dateOfExpire = dates[2] || null;

    identityCard.surname = names[0] || "N/A";
    identityCard.givenname = names[1] + " " + names[2] || "N/A";

    identityCard.Nationality = Nationality;
    identityCard.documentNo = documentNo || "N/A";

    identityCard.sex = "N/A";

    return identityCard;

};

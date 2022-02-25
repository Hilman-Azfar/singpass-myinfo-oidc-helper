
import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { MyInfoCountryCode, MyInfoMaritialStatusCode, MyInfoNationalityCode, MyInfoOccupationCode, MyInfoRaceCode, MyInfoResidentialCode, MyInfoSexCode } from "../../domain";

const id = "S9005004D";
const name = ProfileArchetype.MR_ICA_PR_DADDY_SPOUSE_SCENARIO_2;

export const mrICADaddyScenario2: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.sex.code = MyInfoSexCode.MALE;
		profile.sex.desc = MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE);
		profile.race = {
			"lastupdated": "2022-02-25",
			"code": MyInfoRaceCode.MALAY,
			"desc": MyInfoRaceCode.fn.toEnumDesc(MyInfoRaceCode.MALAY),
			"source": "1",
			"classification": "C",
			"unavailable": false,
		},
		profile.dob = {
			"lastupdated": "2022-02-25",
			"source": "1",
			"classification": "C",
			"value": "1990-02-02",
			"unavailable": false,
		};
		profile.residentialstatus = {
			"lastupdated": "2018-06-01",
			"code": MyInfoResidentialCode.PR,
			"desc": MyInfoResidentialCode.fn.toEnumDesc(MyInfoResidentialCode.PR),
			"source": "1",
			"classification": "C",
			"unavailable": false,
		},
		profile.nationality.code = MyInfoNationalityCode.MALAYSIAN;
		profile.marriagecertno = {
			"lastupdated": "2022-02-25",
			"source": "1",
			"classification": "C",
			"value": "M23456",
			"unavailable": false,
		};
		profile.marriagedate = {
			"lastupdated": "2020-09-10",
			"source": "2",
			"classification": "C",
			"value": "",
			"unavailable": false,
		};
		profile.countryofmarriage = {
			"lastupdated": "2022-02-25",
			"code": MyInfoCountryCode.SINGAPORE,
			"desc": MyInfoCountryCode.fn.toEnumDesc(MyInfoCountryCode.SINGAPORE),
			"source": "1",
			"classification": "C",
			"unavailable": false,
		};
		profile.marital = {
			"lastupdated": "2022-02-25",
			"code": MyInfoMaritialStatusCode.MARRIED,
			"desc": MyInfoMaritialStatusCode.fn.toEnumDesc(MyInfoMaritialStatusCode.MARRIED),
			"source": "1",
			"classification": "C",
			"unavailable": false,
		};

		return profile;
	}
};
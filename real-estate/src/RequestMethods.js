import axios from 'axios';

const url = 'http://localhost:5000/api/schedule';


class RequestMethods {
    //GET
    static getPosts(){
        return new Promise( async (resolve, reject) => {
            try{
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    })
                    )
                );
            }catch (err) {
                reject(err);

            }
        })
    }

    //CREATE Posts
    static createPost(
                      nameOfApplicant,
                      presentDate,
                      DOB,
                      email,
                      cellPhone,
                      ssn,
                      driverLicense,
                      presentAddress,
                      presentCity,
                      presentState,
                      presentZip,
                      priorAddress,
                      priorCity,
                      priorState,
                      priorZip,
                      yearsAtPresentAddress,
                      yearsAtPriorAddress,
                      priorLandlord,
                      landLordPhone,
                      totalAdults,
                      totalChildren,
                      totalPets,
                      petWeight,
                      employer,
                      occupation,
                      currentSalary,
                      yearsWorked,
                      contactPerson,
                      contactNumber,
                      spouseName,
                      spouseDOB,
                      spousePhone,
                      spouseSsn,
                      spouseDriverLicense,
                      spouseEmployer,
                      spouseOccupation,
                      spouseCurrentSalary,
                      spouseYearsWorked,
                      spouseContactPerson,
                      spouseContactPhone,
                      bankName,
                      bankBranch,
                      bankPhone,
                      bankAddress,
                      checkingAccount,
                      savingsAccount,
                      referenceName,
                      relationship,
                      referenceNumber,
                      creditGrantor,
                      grantorAddress,
                      grantorPhone,
                      numberOfVehicles,
                      makeModel,
                      year,
                      color,
                      tagNo,
                      state

                      ) {
        return axios.post(url, {
            presentDate,
           nameOfApplicant,
           DOB,
            email,
            cellPhone,
            ssn,
            driverLicense,
            presentAddress,
            presentCity,
            presentState,
            presentZip,
            priorAddress,
            priorCity,
            priorZip,
            yearsAtPresentAddress,
            yearsAtPriorAddress,
            priorLandlord,
            landLordPhone,
            totalAdults,
            totalChildren,
            totalPets,
            petWeight,
            employer,
            occupation,
            currentSalary,
            yearsWorked,
            contactPerson,
            contactNumber,
            spouseName,
            spouseDOB,
            spousePhone,
            spouseSsn,
            spouseDriverLicense,
            spouseEmployer,
            spouseOccupation,
            spouseCurrentSalary,
            spouseYearsWorked,
            spouseContactPerson,
            spouseContactPhone,
            bankName,
            bankBranch,
            bankPhone,
            bankAddress,
            checkingAccount,
            savingsAccount,
            referenceName,
            relationship,
            referenceNumber,
            creditGrantor,
            grantorAddress,
            grantorPhone,
            numberOfVehicles,
            makeModel,
            year,
            color,
            tagNo,
            state

        });
    }

    //Delete Posts

    static deletePost(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default RequestMethods;
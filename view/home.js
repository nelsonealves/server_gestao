window.addEventListener('load', (event) => {
    _get('http://localhost:8081/all_state')
    .then(value => {
        let select_state_add = document.getElementById('sel_new_dealer');
        let select_state_tribute = document.getElementById('sel_state_tribute');
        console.log('value state');
        console.log(value);
        value.map(state => {
            let opt1 = document.createElement('option');
            let opt2 = document.createElement('option');
            opt1.text = state.uf;
            opt2.text = state.uf;
            select_state_add.appendChild(opt1)
            select_state_tribute.appendChild(opt2)
        });
    })

    _get('http://localhost:8081/dealerships/state')
    .then(value => {
        let dealership = document.getElementById('dealership');
        console.log('value');
        console.log(value);
        value.map(dealer => {
            let opt = document.createElement('option');
            opt.id = dealer._id;
            opt.text = `${dealer.name} - ${dealer.idState.uf}`;
            opt.value = dealer._id;
            dealership.appendChild(opt)

        });
    })

    document.getElementById('add_tribute').addEventListener('click', event => { add_tribute() });
    document.getElementById('add_tariff').addEventListener('click', event => { add_tariff() });
    document.getElementById('add_dealership').addEventListener('click', event => { add_dealership() });
});

let _post = (url, body) => {
    return fetch(url , {
            headers: new Headers({"Accept": "application/json","Content-Type": "application/json","Access-Control-Allow-Origin" : "*"}),
            method: 'POST',
            body: JSON.stringify(body)
        }).then((res) => {
            return res.json();
        }).then((data, err) => {
            if (err) return Promise.reject(err);
                console.log(data);
                return Promise.resolve(data);
        });
}

let _get = (url) => {
    return fetch(url , {
            method: 'GET',
            
        }).then((resp) => {
            return resp.json();
        }).then((data, err) => {
            if (err) return Promise.reject(err);
                return Promise.resolve(data);
        });
}

let add_tribute = () => {


}

let add_tariff = () => {
    // let tariff = {
    //     blue: get_blue(),
    //     green: get_green(),
    //     white: get_white(),
    //     conventional: get_conventional()    
    // }
    let tariff = {
        idDealership: document.getElementById('dealership').options[document.getElementById('dealership').selectedIndex].value,
        date: Date(document.getElementById('date_tariff'))
    }


   _post('http://localhost:8081/tariff', tariff)
   .then(value => {
        _post('http://localhost:8081/blue/many', get_blue(value._id))
        .then(v1 => {
            console.log(v1);
            _post('http://localhost:8081/green/many', get_green(value._id))
            .then(v2 => {
                console.log(v2)
                _post('http://localhost:8081/white/many', get_white(value._id))
                .then(v3 => {
                    console.log(v3)
                    _post('http://localhost:8081/conventional/many', get_conventional(value._id))
                    .then(v4 => {
                        console.log(v4)
                        alert("As faturas foram adicionadas com sucesso!")
                    });
                });
            });
        });
    console.log(value);
   });
}

let get_blue = (idTariff) => {
    let tariff = [];
    if(!document.getElementById("a_a1").checked){
        tariff.push(
            {
                demandaPonta: parseFloat(document.getElementById('a1_dp').value),
                demandaForaPonta: parseFloat(document.getElementById('a1_d_fp').value),
                tePonta: parseFloat(document.getElementById('a1_te_p').value),
                teForaPonta: parseFloat(document.getElementById('a1_te_fp').value),
                tusdPonta: parseFloat(document.getElementById('a1_tusd_p').value),
                tusdForaPonta: parseFloat(document.getElementById('a1_tusd_fp').value),
                idCategory: '5ee1968b97eaeea7c2b29603',
                idTariff: idTariff
            }
        )
    }
    if(!document.getElementById("a_a2").checked){
        tariff.push(
        {
            demandaPonta: parseFloat(document.getElementById('a2_dp').value),
            demandaForaPonta: parseFloat(document.getElementById('a2_d_fp').value),
            tePonta: parseFloat(document.getElementById('a2_te_p').value),
            teForaPonta: parseFloat(document.getElementById('a2_te_fp').value),
            tusdPonta: parseFloat(document.getElementById('a2_tusd_p').value),
            tusdForaPonta: parseFloat(document.getElementById('a2_tusd_fp').value),
            idCategory: '5ee1968e97eaeea7c2b29604',
            idTariff: idTariff
        }
        )
    }
    if(!document.getElementById("a_a3").checked){
        tariff.push(
        {
            demandaPonta: parseFloat(document.getElementById('a3_dp').value),
            demandaForaPonta: parseFloat(document.getElementById('a3_d_fp').value),
            tePonta: parseFloat(document.getElementById('a3_te_p').value),
            teForaPonta: parseFloat(document.getElementById('a3_te_fp').value),
            tusdPonta: parseFloat(document.getElementById('a3_tusd_p').value),
            tusdForaPonta: parseFloat(document.getElementById('a3_tusd_fp').value),
            idCategory: '5ee1969397eaeea7c2b29605',
            idTariff: idTariff
        }
        )
    }
    if(!document.getElementById("a_a3a").checked){
        tariff.push(
        {
            demandaPonta: parseFloat(document.getElementById('a3a_dp').value),
            demandaForaPonta: parseFloat(document.getElementById('a3a_d_fp').value),
            tePonta: parseFloat(document.getElementById('a3a_te_p').value),
            teForaPonta: parseFloat(document.getElementById('a3a_te_fp').value),
            tusdPonta: parseFloat(document.getElementById('a3a_tusd_p').value),
            tusdForaPonta: parseFloat(document.getElementById('a3a_tusd_fp').value),
            idCategory: '5ee1969597eaeea7c2b29606',
            idTariff: idTariff
        }
        )
    }
    if(!document.getElementById("a_a4").checked){
        tariff.push(
        {
            demandaPonta: parseFloat(document.getElementById('a4_dp').value),
            demandaForaPonta: parseFloat(document.getElementById('a4_d_fp').value),
            tePonta: parseFloat(document.getElementById('a4_te_p').value),
            teForaPonta: parseFloat(document.getElementById('a4_te_fp').value),
            tusdPonta:parseFloat(document.getElementById('a4_tusd_p').value),
            tusdForaPonta: parseFloat(document.getElementById('a4_tusd_fp').value),
            idCategory: '5ee1969897eaeea7c2b29607',
            idTariff: idTariff
        }
        )
    }
    if(!document.getElementById("a_a4").checked){
        tariff.push(
        {
            demandaPonta: parseFloat(document.getElementById('as_dp').value),
            demandaForaPonta: parseFloat(document.getElementById('as_d_fp').value),
            tePonta: parseFloat(document.getElementById('as_te_p').value),
            teForaPonta: parseFloat(document.getElementById('as_te_fp').value),
            tusdPonta: parseFloat(document.getElementById('as_tusd_p').value),
            tusdForaPonta: parseFloat(document.getElementById('as_tusd_fp').value),
            idCategory: '5ee1969b97eaeea7c2b29608',
            idTariff: idTariff
        }
        )
    }
    return tariff;
}

let get_green = (idTariff) => {
    let tariff = [];

    if(!document.getElementById("v_a_a1").checked){
        tariff.push(
            {   
                demandaUnica: parseFloat(document.getElementById('v_a1_d_u').value),
                tePonta: parseFloat(document.getElementById('v_a1_te_p').value),
                teForaPonta: parseFloat(document.getElementById('v_a1_te_fp').value),
                tusdPonta: parseFloat(document.getElementById('v_a1_tusd_p').value),
                tusdForaPonta: parseFloat(document.getElementById('v_a1_tusd_fp').value),
                idCategory: '5ee1966c97eaeea7c2b295fd',
                idTariff: idTariff
            }
        )
    }
    if(!document.getElementById("v_a_a2").checked){
        tariff.push(
            {
                demandaUnica: parseFloat(document.getElementById('v_a2_d_u').value),
                tePonta: parseFloat(document.getElementById('v_a2_te_p').value),
                teForaPonta: parseFloat(document.getElementById('v_a2_te_fp').value),
                tusdPonta: parseFloat(document.getElementById('v_a2_tusd_p').value),
                tusdForaPonta: parseFloat(document.getElementById('v_a2_tusd_fp').value),
                idCategory: '5ee1967197eaeea7c2b295fe',
                idTariff: idTariff
            }
        )
    }
    if(!document.getElementById("v_a_a3").checked){
        tariff.push(
            {
                demandaUnica: parseFloat(document.getElementById('v_a3_d_u').value),
                tePonta: parseFloat(document.getElementById('v_a3_te_p').value),
                teForaPonta: parseFloat(document.getElementById('v_a3_te_fp').value),
                tusdPonta: parseFloat(document.getElementById('v_a3_tusd_p').value),
                tusdForaPonta: parseFloat(document.getElementById('v_a3_tusd_fp').value),
                idCategory: '5ee1967297eaeea7c2b295ff',
                idTariff: idTariff
            }
        )
    }
    if(!document.getElementById("v_a_a3a").checked){
        tariff.push(
            {
                demandaUnica: parseFloat(document.getElementById('v_a3a_d_u').value),
                tePonta: parseFloat(document.getElementById('v_a3a_te_p').value),
                teForaPonta: parseFloat(document.getElementById('v_a3a_te_fp').value),
                tusdPonta: parseFloat(document.getElementById('v_a3a_tusd_p').value),
                tusdForaPonta: parseFloat(document.getElementById('v_a3a_tusd_fp').value),
                idCategory: '5ee1967a97eaeea7c2b29600',
                idTariff: idTariff
            }
        )
    }
    if(!document.getElementById("v_a_a4").checked){
        tariff.push(
            {
                demandaUnica: parseFloat(document.getElementById('v_a4_d_u').value),
                tePonta: parseFloat(document.getElementById('v_a4_te_p').value),
                teForaPonta: parseFloat(document.getElementById('v_a4_te_fp').value),
                tusdPonta: parseFloat(document.getElementById('v_a4_tusd_p').value),
                tusdForaPonta: parseFloat(document.getElementById('v_a4_tusd_fp').value),
                idCategory: '5ee1967e97eaeea7c2b29601',
                idTariff: idTariff
            }
        )
    }
    if(!document.getElementById("v_a_as").checked){
        tariff.push(
            {
                demandaUnica: parseFloat(document.getElementById('v_as_d_u').value),
                tePonta: parseFloat(document.getElementById('v_as_te_p').value),
                teForaPonta: parseFloat(document.getElementById('v_as_te_fp').value),
                tusdPonta: parseFloat(document.getElementById('v_as_tusd_p').value),
                tusdForaPonta: parseFloat(document.getElementById('v_as_tusd_fp').value),
                idCategory: '5ee1968197eaeea7c2b29602',
                idTariff: idTariff
            }
        )
    }
    return tariff;
    
}

let get_white = (idTariff) => {
    let tariff = [];
    if(!document.getElementById("w_b_b1").checked){
        tariff.push(
            {
                tePonta: parseFloat(document.getElementById('b1_te_p').value),
                teIntermed: parseFloat(document.getElementById('b1_te_i').value),
                teForaPonta: parseFloat(document.getElementById('b1_te_fp').value),
                tusdPonta: parseFloat(document.getElementById('b1_tusd_p').value),
                tusdForaPonta: parseFloat(document.getElementById('b1_tusd_fp').value),
                idCategory: '5ee196a797eaeea7c2b29609',
                idTariff: idTariff
            }
        )
    }
    if(!document.getElementById("w_b_b2").checked){
        tariff.push(
            {
                tePonta: parseFloat(document.getElementById('b2_te_p').value),
                teIntermed: parseFloat(document.getElementById('b2_te_i').value),
                teForaPonta: parseFloat(document.getElementById('b2_te_fp').value),
                tusdPonta: parseFloat(document.getElementById('b2_tusd_p').value),
                tusdForaPonta: parseFloat(document.getElementById('b2_tusd_fp').value),
                idCategory: '5ee196a997eaeea7c2b2960a',
                idTariff: idTariff
            }
        )
    }
    if(!document.getElementById("w_b_b3").checked){
        tariff.push(
            {
                tePonta: parseFloat(document.getElementById('b3_te_p').value),
                teIntermed: parseFloat(document.getElementById('b3_te_i').value),
                teForaPonta: parseFloat(document.getElementById('b3_te_fp').value),
                tusdPonta: parseFloat(document.getElementById('b3_tusd_p').value),
                tusdForaPonta: parseFloat(document.getElementById('b3_tusd_fp').value),
                idCategory: '5ee196aa97eaeea7c2b2960b',
                idTariff: idTariff
            }
        )
    }
    return tariff;
}

let get_conventional = (idTariff) => {
    let tariff = []; 
    if(!document.getElementById("c_b1").checked){
        tariff.push(
            {
                te: parseFloat(document.getElementById('b1_te').value),
                tusd: parseFloat(document.getElementById('b1_tusd').value),
                idCategory: '5ee196b497eaeea7c2b2960c',
                idTariff: idTariff
            }
        )
    }
    if(!document.getElementById("c_b2").checked){
        tariff.push(
            {
                te: parseFloat(document.getElementById('b2_te').value),
                tusd: parseFloat(document.getElementById('b2_tusd').value),
                idCategory: '5ee196b697eaeea7c2b2960d',
                idTariff: idTariff
            }
        )
    }
    if(!document.getElementById("c_b3").checked){
        tariff.push(
            {
                te: parseFloat(document.getElementById('b3_te').value),
                tusd: parseFloat(document.getElementById('b3_tusd').value),
                idCategory: '5ee196b897eaeea7c2b2960e',
                idTariff: idTariff
            }
        )
    }
    return tariff;
}




let add_dealership = () => {
    let dealership = {
        name: document.getElementById('dealership_name').value,
        uf: document.getElementById('sel_new_dealer').options[document.getElementById('sel_new_dealer').selectedIndex].value
    }
    console.log(dealership);
    _post("http://localhost:8081/dealership", dealership)
    .then(value => { 
        console.log('value')
        console.log(value)
    });
}
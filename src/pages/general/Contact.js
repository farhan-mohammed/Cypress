import React, { Component } from "react";
import DashboarWrapper from "../../components/ThemeWrapper";
import { connect } from "react-redux";

class Contact extends Component {
    render() {
        const L = this.props.lang;
        function Header() {
            return (
                <div className="contact">
                    <h1 className="contact-h1">
                    { L === "en"
                        ? "Contact City Officials"
                        : "Contacter Les Officiels De La Ville"
                    }
                    </h1>
                    <div className="contact-input__con">
                        <div className="contact-search__con ui input">
                            <input
                                className="contact-search "
                                type="text"
                                placeholder=
                                { L === "en" ? "Search..." : "Chercher..." }
                            ></input>
                        </div>
                        <div className="contact-dropdown__con">
                            <label className="contact-label" for="user">
                            { L === "en" ? "Sort By:" : "Trier Par:" }
                            </label>
                            <div className="contact-field">
                                <div class="ui form fluid">
                                    <div>
                                        <select>
                                            <option value="-1">
                                                { L === "en" ? "Ward Name" : "Nom du quartier" }
                                            </option>
                                            <option value="0">
                                                { L === "en" ? "Councillor" : "Conseiller(e)" }   
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        function Table() {
            const information = [
                {
                    name: "Etobicoke North",
                    location: "Councillor Michael Ford",
                    email: "councillor_mford@toronto.ca",
                    phone: "416-397-9255",
                },
                {
                    name: "Etobicoke Centre",
                    location: "Councillor Stephen Holyday",
                    email: "councillor_holyday@toronto.ca",
                    phone: "416-392-4002",
                },
                {
                    name: "Etobicoke-Lakeshore",
                    location: "Councillor Mark Grimes",
                    email: "councillor_grimes@toronto.ca",
                    phone: "416-397-9273",
                },
                {
                    name: "Parkdale-High Park",
                    location: "Councillor Gord Perks",
                    email: "councillor_perks@toronto.ca",
                    phone: "416-392-7919",
                },
                {
                    name: "York South-Weston",
                    location: "Councillor Frances Nunziata",
                    email: "councillor_nunziata@toronto.ca",
                    phone: "416-392-4091",
                },
                {
                    name: "York Centre",
                    location: "Councillor James Pasternak",
                    email: "councillor_pasternak@toronto.ca",
                    phone: "416-392-1371",
                },
                {
                    name: "Humber River-Black Creek",
                    location: "Councillor Anthony Perruzza",
                    email: "councillor_perruzza@toronto.ca",
                    phone: "416-338-5335",
                },
                {
                    name: "Eglinton-Lawrence",
                    location: "Councillor Mike Colle",
                    email: "councillor_colle8@toronto.ca",
                    phone: "416-338-2500",
                },
                {
                    name: "Davenport",
                    location: "Councillor Ana Bailão",
                    email: "councillor_bailao@toronto.ca",
                    phone: "416-392-7012",
                },
                {
                    name: "Spadina-Fort York",
                    location: "Councillor Joe Cressy",
                    email: "councillor_cressy@toronto.ca",
                    phone: "416-392-4044",
                },
                {
                    name: "University-Rosedale",
                    location: "Councillor Mike Layton",
                    email: "councillor_layton@toronto.ca",
                    phone: "416-392-4009",
                },
                {
                    name: "Toronto-St. Paul’s",
                    location: "	Councillor Josh Matlow",
                    email: "councillor_matlow@toronto.ca",
                    phone: "416-392-7906",
                },
                {
                    name: "Toronto Centre",
                    location: "Councillor Kristyn Wong-Tam",
                    email: "councillor_wongtam@toronto.ca",
                    phone: "416-392-7903",
                },
                {
                    name: "Toronto-Danforth",
                    location: "Councillor Paula Fletcher",
                    email: "councillor_fletcher@toronto.ca",
                    phone: "416-392-4060",
                },
                {
                    name: "Don Valley West",
                    location: "Councillor Jaye Robinson",
                    email: "councillor_robinson@toronto.ca",
                    phone: "416-395-6408",
                },
                {
                    name: "Don Valley East",
                    location: "	Councillor Denzil Minnan-Wong",
                    email: "councillor_minnan-wong@toronto.ca",
                    phone: "416-397-9256",
                },
                {
                    name: "Don Valley North",
                    location: "Councillor Shelley Carroll",
                    email: "councillor_carroll@toronto.ca",
                    phone: "416-338-2650",
                },
                {
                    name: "Willowdale",
                    location: "Councillor John Filion",
                    email: "councillor_filion@toronto.ca",
                    phone: "416-392-0210",
                },
                {
                    name: "Beaches-East York",
                    location: "Councillor Brad Bradford",
                    email: "councillor_bradford@toronto.ca",
                    phone: "416-338-2755",
                },
                {
                    name: "Scarborough Southwest",
                    location: "Councillor Gary Crawford",
                    email: "councillor_crawford@toronto.ca",
                    phone: "416-392-4052",
                },
                {
                    name: "Scarborough Centre",
                    location: "Councillor Michael Thompson",
                    email: "councillor_thompson@toronto.ca",
                    phone: "416-397-9274",
                },
                {
                    name: "Scarborough-Agincourt",
                    location: "Councillor Nick Mantas",
                    email: "councillor_mantas@toronto.ca",
                    phone: "416-392-1374",
                },
                {
                    name: "Scarborough North",
                    location: "Councillor Cynthia Lai",
                    email: "councillor_lai@toronto.ca",
                    phone: "416-338-2858",
                },
                {
                    name: "Scarborough-Guildwood",
                    location: "Councillor Paul Ainslie",
                    email: "councillor_ainslie@toronto.ca",
                    phone: "416-392-4008",
                },
                {
                    name: "Scarborough-Rouge Park",
                    location: "Councillor Jennifer McKelvie",
                    email: "councillor_mckelvie@toronto.ca",
                    phone: "416-338-3771",
                },
            ];
            return (
                <table className="content">
                    <thead className="content-header">
                        <tr>
                            <th> { L === "en" ? "WARD NAME": "NOM DU QUARTIER" } </th>
                            <th> { L === "en" ? "COUNCILLOR": "CONSEILLER(E)" } </th>
                            <th> { L === "en" ? "E-MAIL": "E-MAIL" } </th>
                            <th> { L === "en" ? "TELEPHONE": "TÉLÉPHONE" } </th>
                        </tr>
                    </thead>

                    <tbody className="content-body">
                        {information.map(({ name, location, email, phone }) => {
                            return (
                                <tr>
                                    <td>{name}</td>
                                    <td>{location}</td>
                                    <td>{email}</td>
                                    <td>{phone}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            );
        }

        return (
            <DashboarWrapper currentPage={3}>
                <div className="content-con">
                    <div className="content-header">
                        <Header />
                    </div>
                    <div className="content-table">
                        <Table />
                    </div>
                </div>
            </DashboarWrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    lang: state.lang.lang,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);

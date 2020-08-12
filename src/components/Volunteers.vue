<template>
    <v-main>
        <v-row class="my-0 py-1">
            <v-col cols="4"></v-col>
            <v-col cols="6" align="left">
                <v-chip :input-value="filters.approved" @click="filters.approved = !filters.approved;" filter color="green">Approved</v-chip>
                <v-chip :input-value="filters.pending" @click="filters.pending = !filters.pending;" filter color="blue">Pending Approval</v-chip>
                <v-chip :input-value="filters.disapproved" @click="filters.disapproved = !filters.disapproved;" filter >Disapproved</v-chip>
                <v-chip :input-value="filters.inactive" @click="filters.inactive = !filters.inactive;" filter color="grey">Inactive</v-chip>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4"></v-col>
            <v-col cols="2">
                <v-text-field placeholder="Search" v-model="search" append-icon="mdi-magnify"></v-text-field>
            </v-col>
            <v-col cols="2">
                <AddVolunteer v-on:saveNewVolunteer="saveNewVolunteer" :states="states"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4"></v-col>
            <v-col cols="4">
                <v-list-item-group v-if="filteredList.length > 0" color="primary" light>
                    <v-list-item v-for="item in filteredList" :key="item">
                        <ViewVolunteer :item="item" :list="volunteers" :states="states"/> {{item.name.First}} {{item.name.Last}}
                        <v-list-item-content>
                            <v-list-group>
                                <v-list-item  v-for="center in item.centers" :key="center">
                                    {{center}}
                                </v-list-item>
                            </v-list-group>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
                <div v-if="filteredList.length == 0"> No Volunteers Match the Given Criteria</div>
            </v-col>
        </v-row>
    </v-main>
</template>

<script>
    import ViewVolunteer from "@/components/ViewVolunteer";
    import AddVolunteer from "@/components/AddVolunteer";

    class EmergencyContact {
        constructor(name, address, numbers, email){
            this.name = name;
            this.address = address;
            this.numbers = numbers;
            this.email = email;
        }
    }
    class Volunteer {
        centers = [];
        skills = [];
        licenses = [];

        addLicense(license){
            this.licenses.push(license);
        }

        addSkill(skill){
            this.skills.push(skill);
        }


        addCenter(center){
            this.centers.push(center);
        }

        getCenters(){
            return this.centers;
        }

        constructor(name, lof, sof, status, centers, skills,
                    times, address, numbers, email, education,
                    licenses, emergency_contact) {
            this.name = name; //
            this.status = status;
            this.username = 'username';
            this.password = 'password';
            this.license_on_file = lof;
            this.social_on_file = sof;
            // this.centers = centers.split(",");
            this.skills = skills;
            this.licenses = licenses;
            this.times = times; //
            this.address = address; //
            this.numbers = numbers; //
            this.email = email; //
            this.education = education; //
            this.emergency_contact = emergency_contact;
            this.addCenter( 'Reel');
            this.addCenter( 'Lunk');
            this.addCenter('Staff');
            this.addCenter('Curd');
        }
    }

    export default {
        name: "Volunteers",
        components: {AddVolunteer, ViewVolunteer},
        data() {
            return {
                filters: {
                    disapproved: false,
                    approved: true,
                    pending: true,
                    inactive: false
                },
                search: '',
                states: ['Alabama','Alaska','American Samoa','Arizona','Arkansas',
                    'California','Colorado','Connecticut','Delaware','District of Columbia','' +
                    'Federated States of Micronesia','Florida','Georgia','Guam','Hawaii',
                    'Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana',
                    'Maine','Marshall Islands','Maryland','Massachusetts','Michigan',
                    'Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada',
                    'New Hampshire','New Jersey','New Mexico','New York','North Carolina',
                    'North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon',
                    'Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina',
                    'South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island',
                    'Virginia','Washington','West Virginia','Wisconsin','Wyoming'
                ],
                volunteers: [
                    new Volunteer(
                        {First: 'Jeff', Last: 'Barren'},
                        true,
                        true,
                        'approved',
                        ['Burk', 'Martin Schults', 'New Bethel'],
                        ['Software', 'Finance','Education' ],
                        {
                            Monday: '8-8',
                            Tuesday: '8-8',
                            Wednesday: '8-8',
                            Thursday: '8-8',
                            Friday: '8-8',
                            Saturday: '8-8',
                            Sunday: '8-8',

                        },
                        {
                            StreetNumber: '8135',
                            StreetName: 'Brent Hill Dr',
                            City: 'Lakeville',
                            State: 'Minnesota',
                            Zip: '87396'
                        },
                        {
                            Home: '783-937-2626',
                            Cell: '839-375-3394',
                            Work: '839-378-3785'
                        },
                        'bluekid@prune.com',
                        {
                            Name: 'UNF',
                            Major: 'Computer Information',
                            Type: 'Bachelor'
                        },
                        ['e3','platform89'],
                        new EmergencyContact(
                            {First: 'Jim', Last:'Beam'},
                            {StreetNumber: '1234', StreetName: 'Luke warm lake',
                                City:'Lake City', State: 'FL', Zip:'32209'
                            },
                            {Home: '838-989-8938', Work:'389-589-3399'},
                            'durk@lively.com'
                        )
                    ),
                    new Volunteer(
                        {First: 'Larry', Last: 'Kimp'},
                        true,
                        true,
                        'disapproved',
                        ['Burk', 'Martin Schults', 'New Bethel'],
                        ['Software', 'Finance','Education' ],
                        {
                            Monday: '8-8',
                            Tuesday: '8-8',
                            Wednesday: '8-8',
                            Thursday: '8-8',
                            Friday: '8-8',
                            Saturday: '8-8',
                            Sunday: '8-8',

                        },
                        {
                            StreetNumber: '8135',
                            StreetName: 'Brent Hill Dr',
                            City: 'Lakeville',
                            State: 'Minnesota',
                            Zip: '87396'
                        },
                        {
                            Home: '783-937-2626',
                            Cell: '839-375-3394',
                            Work: '839-378-3785'
                        },
                        'bluekid@prune.com',
                        {
                            Name: 'UNF',
                            Major: 'Computer Information',
                            Type: 'Bachelor'
                        },
                        ['e3','platform89'],
                        new EmergencyContact(
                            {First: 'Jim', Last:'Beam'},
                            {StreetNumber: '1234', StreetName: 'Luke warm lake',
                                City:'Lake City', State: 'FL', Zip:'32209'
                            },
                            {Home: '838-989-8938', Work:'389-589-3399'},
                            'durk@lively.com'
                        )
                    ),
                    new Volunteer(
                        {First: 'Larry', Last: 'Kimp'},
                        true,
                        true,
                        'disapproved',
                        ['Burk', 'Martin Schults', 'New Bethel'],
                        ['Software', 'Finance','Education' ],
                        {
                            Monday: '8-8',
                            Tuesday: '8-8',
                            Wednesday: '8-8',
                            Thursday: '8-8',
                            Friday: '8-8',
                            Saturday: '8-8',
                            Sunday: '8-8',

                        },
                        {
                            StreetNumber: '8135',
                            StreetName: 'Brent Hill Dr',
                            City: 'Lakeville',
                            State: 'Minnesota',
                            Zip: '87396'
                        },
                        {
                            Home: '783-937-2626',
                            Cell: '839-375-3394',
                            Work: '839-378-3785'
                        },
                        'bluekid@prune.com',
                        {
                            Name: 'UNF',
                            Major: 'Computer Information',
                            Type: 'Bachelor'
                        },
                        ['e3','platform89'],
                        new EmergencyContact(
                            {First: 'Jim', Last:'Beam'},
                            {StreetNumber: '1234', StreetName: 'Luke warm lake',
                                City:'Lake City', State: 'FL', Zip:'32209'
                            },
                            {Home: '838-989-8938', Work:'389-589-3399'},
                            'durk@lively.com'
                        )
                    ),
                    new Volunteer(
                        {First: 'Jake', Last: 'Rite'},
                        true,
                        true,
                        'pending',
                        ['Burk', 'Martin Schults', 'New Bethel'],
                        ['Software', 'Finance','Education' ],
                        {
                            Monday: '8-8',
                            Tuesday: '8-8',
                            Wednesday: '8-8',
                            Thursday: '8-8',
                            Friday: '8-8',
                            Saturday: '8-8',
                            Sunday: '8-8',

                        },
                        {
                            StreetNumber: '8135',
                            StreetName: 'Brent Hill Dr',
                            City: 'Lakeville',
                            State: 'Minnesota',
                            Zip: '87396'
                        },
                        {
                            Home: '783-937-2626',
                            Cell: '839-375-3394',
                            Work: '839-378-3785'
                        },
                        'bluekid@prune.com',
                        {
                            Name: 'UNF',
                            Major: 'Computer Information',
                            Type: 'Bachelor'
                        },
                        ['e3','platform89'],
                        new EmergencyContact(
                            {First: 'Jim', Last:'Beam'},
                            {StreetNumber: '1234', StreetName: 'Luke warm lake',
                                City:'Lake City', State: 'FL', Zip:'32209'
                            },
                            {Home: '838-989-8938', Work:'389-589-3399'},
                            'durk@lively.com'
                        )
                    ),
                ],
            }
        },
        methods:{
            saveNewVolunteer(person) {
                this.volunteers.push(new Volunteer(
                    person.name, person.license_on_file, person.social_on_file, person.status, person.centers,
                    person.skills.split(","), person.times, person.address, person.numbers, person.email,
                    person.education, person.licenses.split(","),
                    new EmergencyContact(person.emergency_contact.name, person.emergency_contact.address,
                        person.emergency_contact.numbers, person.emergency_contact.email)
                ));
            },
        },
        computed: {
            filteredList() {
                return this.volunteers.filter(volunteer => {
                    if(this.filters[volunteer.status]){
                        return volunteer.name.First.toLowerCase().includes(this.search.toLowerCase())
                    }
                })
            },
        }
    }
</script>
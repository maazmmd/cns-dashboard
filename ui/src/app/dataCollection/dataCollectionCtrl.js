(function (app) {
    app.config(function ($stateProvider) {
        return $stateProvider.state('dataCollection', {
            url: "/dataCollection/:status/view",
            templateUrl: 'html/dataCollection.html',
            controller: 'dataCollectionCtrl',
            params: {
                paramOne: "defaultValue"
            }
        })
    });
    //"use strict";
    return app.controller('dataCollectionCtrl', function ($rootScope, $state, $scope, $stateParams) {
        $scope.dataCollectionStatus = $stateParams.paramOne;
        //$scope.dataCollectionparamTwo = $stateParams.paramTwo;

        $(function () {
            var myPieVillageDataChart =
                // Build the chart
                Highcharts.chart('villageDataChart', {
                    chart: {
                        //render: 'villageDataChart',
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false,
                        type: 'pie'
                    },
                    title: {
                        text: 'Aviation Edge - Global Aviation Database Contribution'
                    },
                    tooltip: {
                        formatter: function () {
                            return '<b>' + this.y + '%</b> of Data Analysed';
                        }
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                                style: {
                                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                                },
                                connectorColor: 'silver'
                            }
                        }
                    },
                    series: [{
                        name: 'Completed',
                        data: [
                            {name: 'Toronto Pearson', y: 56.33},
                            {
                                name: 'Vancouver',
                                y: 24.03,
                                sliced: true,
                                selected: true
                            },
                            {name: 'Ottawa', y: 10.38},
                            {name: 'Montreal', y: 4.77},
                            {name: 'Edmonton', y: 0.91},
                            {name: 'New Brunswick (Fredericton)', y: 0.2}
                        ]
                    }],
                    credits: {
                        enabled: false
                    },
                    exporting: {
                        buttons: {
                            contextButton: {
                                menuItems: [
                                    {
                                        textKey: 'downloadPNG',
                                        onclick: function () {
                                            this.exportChart();
                                        }
                                    },
                                    {
                                        textKey: 'downloadJPEG',
                                        onclick: function () {
                                            this.exportChart({
                                                type: 'image/jpeg'
                                            });
                                        }
                                    },
                                    {
                                        textKey: 'downloadPDF',
                                        onclick: function () {
                                            this.exportChart({
                                                type: 'application/pdf'
                                            });
                                        }
                                    }
                                ]
                            }
                        }
                    }
                });
        });

        $(function () {
            var myEmbeddedLineChart =
                // Build the chart
                Highcharts.chart('eligiblesHHQChart', {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Overall Progress of Eligibles and HouseHold Questionnaire'
                    },
                    subtitle: {
                        text: 'Click on Eligibles/HHQ Questionnaire below chart to Hide/Show data.'
                    },
                    xAxis: {
                        categories: [
                            'Balewadi',
                            'Laxyachiwadi',
                            'Phapalwadi',
                            'Songiri',
                            'Bramhgaon',
                            'Bhongiri'
                        ],
                        title: {
                            text: 'Villages / Locations'
                        }
                    },
                    yAxis: [{
                        min: 0,
                        title: {
                            text: 'Total Count'
                        }
                    }, {
                        title: {
                            text: ''
                        },
                        opposite: true
                    }],
                    legend: {
                        shadow: false
                    },
                    tooltip: {
                        shared: true
                    },
                    plotOptions: {
                        column: {
                            grouping: false,
                            shadow: false,
                            borderWidth: 0
                        }
                    },
                    series: [{
                        name: 'Eligibles',
                        color: 'rgba(165,170,217,1)',
                        data: [5830, 2490, 1070, 490, 90, 20],
                        pointPadding: 0.2,
                        //pointPlacement: -0.2
                    }, {
                        name: 'HouseHold Questionnaire',
                        color: 'rgba(126,86,134,.9)',
                        data: [4000, 1950, 750, 200, 25, 5],
                        pointPadding: 0.3,
                        //pointPlacement: -0.2
                    }
                       
                    ],
                    credits: {
                        enabled: false
                    },
                    exporting: {
                        buttons: {
                            contextButton: {
                                menuItems: [
                                    {
                                        textKey: 'downloadPNG',
                                        onclick: function () {
                                            this.exportChart();
                                        }
                                    },
                                    {
                                        textKey: 'downloadJPEG',
                                        onclick: function () {
                                            this.exportChart({
                                                type: 'image/jpeg'
                                            });
                                        }
                                    },
                                    {
                                        textKey: 'downloadPDF',
                                        onclick: function () {
                                            this.exportChart({
                                                type: 'application/pdf'
                                            });
                                        }
                                    }
                                ]
                            }
                        }
                    }
                });
        });

        $(function () {
            var myenumeartionChart =
                Highcharts.chart('enumerationChart', {
                    title: {
                        text: 'Enumeration'
                    },
                    subtitle: {
                        text: 'Click on Households / Members/ Eligibles below chart to Hide/Show data.'
                    },
                    xAxis: {
                        categories: ['Balewadi', 'Laxyachiwadi', 'Phapalwadi', 'Songiri', 'Bramhgaon'],
                        title: {
                            text: 'Villages / Locations'
                        }
                    },
                    yAxis: {
                        title: {
                            text: 'Total Count'
                        }
                    },
                    series: [{
                        type: 'column',
                        name: 'Households',
                        data: [3330, 1550, 750, 290, 11]
                    }, {
                        type: 'column',
                        name: 'Members',
                        data: [9900, 5200, 3500, 1400, 55]
                    }, {
                        type: 'column',
                        name: 'Eligibles',
                        data: [5830, 2490, 1070, 490, 20]
                    },
                    ],
                    credits: {
                        enabled: false
                    },
                    exporting: {
                        buttons: {
                            contextButton: {
                                menuItems: [
                                    {
                                        textKey: 'downloadPNG',
                                        onclick: function () {
                                            this.exportChart();
                                        }
                                    },
                                    {
                                        textKey: 'downloadJPEG',
                                        onclick: function () {
                                            this.exportChart({
                                                type: 'image/jpeg'
                                            });
                                        }
                                    },
                                    {
                                        textKey: 'downloadPDF',
                                        onclick: function () {
                                            this.exportChart({
                                                type: 'application/pdf'
                                            });
                                        }
                                    }
                                ]
                            }
                        }
                    }
                });
        });
    });
})(angular.module('myApp.dataCollection', ['ui.router']));
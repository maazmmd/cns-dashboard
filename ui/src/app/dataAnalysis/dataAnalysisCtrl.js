(function (app) {
    app.config(function ($stateProvider) {
        return $stateProvider.state('dataAnalysis', {
            url: "/dataAnalysis/:reason/view",
            templateUrl: 'html/dataAnalysis.html',
            controller: 'dataAnalysisCtrl',
            params: {
                paramOne: "defaultValue"
            }
        })
    });
    //"use strict";
    return app.controller('dataAnalysisCtrl', function ($rootScope, $state, $scope, $stateParams) {
        $scope.analysisType = $stateParams.paramOne;

        $(function () {
            var monthlyReport =
                Highcharts.chart('monthlyReportChart', {

                    title: {
                        text: 'Source : Flightware -  Maintains Largest flight tracking (Aviation Edge)'
                    },
                    tooltip: {
                        formatter: function () {
                            return '<b>' + this.y + '</b>k Recorded';
                        }
                    },
                    xAxis: {
                        categories: ['Dec 18', 'Jan 18', 'Feb 18', 'Mar 18', 'Apr 18', 'May 18', 'Jun 18', 'Jul 18', 'Aug 18', 'Sep 18', 'Oct 18','Nov 18'],
                        title: {
                            text: '2017-18'
                        }
                    },
                    yAxis: {
                        title: {
                            text: 'Recorded Delays Every Month'
                        }
                    },
                    series: [{
                        type: 'column',
                        colorByPoint: true,
                        data: [600, 850, 900, 950, 1100, 950, 1000, 1210, 950, 900, 850, 800],
                        showInLegend: false
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
            var demographicReport =
                Highcharts.chart('demographicReportChart', {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Source : International Airport Authority - Ottawa'
                    },
                    xAxis: {
                        categories: ['2018', '2017', '2016', '2015', '2014 ', '2013'],
                        title: {
                            text: 'Busiest Airports in Canada in past years'
                        }
                    },
                    yAxis: {
                        title: {
                            text: '% Passenger volume - Domestic / International'
                        }
                    },
                    tooltip: {
                        pointFormat: '<span style="color:{series.color}">{series.name}k</span>: <b>{point.y}k</b> ({point.percentage:.0f}%)<br/>',
                        shared: true
                    },
                    plotOptions: {
                        column: {
                            stacking: 'percent'
                        }
                    },
                    series: [{
                        name: 'Domestic',
                        data: [3371, 3813, 3679, 3488, 3434, 3363]
                    }, {
                        name: 'International',
                        data: [5997, 6475, 6734, 7357, 7412, 7726]
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
            var monthlyReport = Highcharts.chart('accidentReportChart', {

                    title: {
                        text: 'Fatalities and Fatal Accidents, 2010-2016'
                    },

                    subtitle: {
                        text: 'Source: Aviation Edge'
                    },

                    yAxis: {
                        title: {
                            text: 'Number of accidents'
                        }
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'middle'
                    },

                    plotOptions: {
                        series: {
                            label: {
                                connectorAllowed: false
                            },
                            pointStart: 2010
                        }
                    },

                    series: [{
                        name: 'FATAL',
                        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
                    }, {
                        name: 'TOTAL',
                        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
                    }, ],

                    responsive: {
                        rules: [{
                            condition: {
                                maxWidth: 500
                            },
                            chartOptions: {
                                legend: {
                                    layout: 'horizontal',
                                    align: 'center',
                                    verticalAlign: 'bottom'
                                }
                            }
                        }]
                    },
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
})(angular.module('myApp.dataAnalysis', ['ui.router']));
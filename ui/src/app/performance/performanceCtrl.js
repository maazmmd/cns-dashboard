(function(app) {
  app.config(function($stateProvider) {
    return $stateProvider.state('performance',{
        url: "/performance/:type/view",
        templateUrl: 'html/performance.html',
        controller: 'performanceCtrl',
        params: {
            paramOne: "defaultValue"    
        }
    })
  });
  return app.controller('performanceCtrl', function($rootScope, $state, $scope, $stateParams) {
        $scope.performanceType = $stateParams.paramOne;

        $(function () { 
          var myPieTeamChart =
                Highcharts.chart('interTeamChart', {

                    title: {
                        text: 'Runway Utilization during 3rd quater 2018'
                    },
                    subtitle: {
                        text: 'Click on AirLine below pie chart to Hide/Show specific data.'
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        categories: ['Dec 18', 'Jan 18', 'Feb 18', 'Mar 18', 'Apr 18', 'May 18', 'Jun 18', 'Jul 18', 'Aug 18', 'Sep 18', 'Oct 18', 'Nov 18']
                    },
                    tooltip: {
                        formatter: function() {
                            return '<b>' + this.y + '</b>' + ' Flights';
                        }
                    },
                    series: [{
                        type: 'pie',
                        allowPointSelect: true,
                        keys: ['name', 'y', 'selected', 'sliced'],
                        data: [
                            ['Air Canada', 1865, true, true],
                            ['Emirates', 1400, false],
                            ['Delta', 1250, false],
                            ['British Airways', 1400, false],
                            ['American Airlines', 1580, false],
                            ['Lufthansa', 1010, false],
                            ['JetBlue Airways', 1345, false]
                        ],
                        showInLegend: true
                    }],
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
          var myLineGraphChart =
              // Create the chart
              Highcharts.chart('surveyorPerformanceChart', {
                  chart: {
                      type: 'column'
                  },
                  title: {
                      text: 'Monthly / Weekly Performance Work load Stats'
                  },
                  subtitle: {
                      text: 'Click columns to view Weekly Status.'
                  },
                  credits: {
                      enabled: false
                  },
                  xAxis: {
                      type: 'category',
                      title: {
                          text: 'On Board during Flights'
                      }
                  },
                  yAxis: {
                      title: {
                          text: 'Hrs Completed Monthly / Weekly without Jetlag'
                      }
                  },
                  legend: {
                      enabled: false
                  },

                  plotOptions: {
                      series: {
                          borderWidth: 0,
                          dataLabels: {
                              enabled: true
                          }
                      }
                  },

                  series: [{
                      name: 'Records',
                      colorByPoint: true,
                      data: [{
                          name: 'Pilot',
                          y: 70,
                          drilldown: 'Pilot'
                      }, {
                          name: 'Co-Pilot',
                          y: 65,
                          drilldown: 'Co-Pilot'
                      }, {
                          name: 'Air Hostress',
                          y: 50,
                          drilldown: 'Air Hostress'
                      }, {
                          name: 'Federal Air Marshal',
                          y: 45,
                          drilldown: 'Federal Air Marshal'
                      }]
                  }],
                  drilldown: {
                      activeAxisLabelStyle: {
                          textDecoration: 'none',
                          fontStyle: 'italic'
                      },
                      activeDataLabelStyle: {
                          textDecoration: 'none',
                          fontStyle: 'italic'
                      },
                      series: [
                          {
                              id: 'Pilot',
                              data: [
                                  ['Week 1', 20],
                                  ['Week 2', 15],
                                  ['Week 3', 20],
                                  ['Week 4', 15]
                              ]
                          },
                          {
                              id: 'Co-Pilot',
                              data: [
                                  ['Week 1', 18],
                                  ['Week 2', 14],
                                  ['Week 3', 18],
                                  ['Week 4', 15]
                              ]
                          },
                          {
                              id: 'Air Hostress',
                              data: [
                                  ['Week 1', 10],
                                  ['Week 2', 12],
                                  ['Week 3', 15],
                                  ['Week 4', 13]
                              ]
                          },
                          {
                              id: 'Cabin Crew',
                              data: [
                                  ['Week 1', 12],
                                  ['Week 2', 13],
                                  ['Week 3', 10],
                                  ['Week 4', 10]
                              ]
                          }
                      ]
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
          var myLineDataCollectionChart =
              Highcharts.chart('intraTeamChart', {
                  chart: {
                      type: 'column'
                  },
                  title: {
                      text: 'Runway Utilization during last fiscal year'
                  },
                  subtitle: {
                      text: 'Click on Airline Name below chart to Hide/Show specific data.'
                  },
                  credits: {
                      enabled: false
                  },
                  xAxis: {
                      categories: [
                          'Dec 2017',
                          'Jan 2018',
                          'Feb 2018',
                          'Mar 2018',
                          'Apr 2018',
                          'May 2018',
                          'Jun 2018',
                          'Jul 2018',
                          'Aug 2018',
                          'Sep 2018',
                          'Oct 2018',
                          'Nov 2018'
                      ],
                      crosshair: true,
                      title: {
                          text: 'Airline Runway Utilization - 2017/18'
                      }
                  },
                  yAxis: {
                      title: {
                          text: 'Flights landed everyday on a dialy basis - Monthwise Data'
                      }
                  },
                  tooltip: {
                      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                      pointFormat: '<tr><td style="color:{series.color};padding:0"><b>{series.name}</b>: </td>' +
                      '<td style="padding:0"><b>{point.y} Surveys</b></td></tr>',
                      footerFormat: '</table>',
                      shared: true,
                      useHTML: true
                  },
                  plotOptions: {
                      column: {
                          pointPadding: 0.2,
                          borderWidth: 0
                      }
                  },
                  series: [{
                      name: 'Air Canada',
                      data: [112, 71, 54, 66, 71, 64, 55, 48, 55, 70, 65, 54]

                  }, {
                      name: 'WestJet',
                      data: [64, 32, 23, 22, 32, 39, 21, 21, 18, 21, 22, 22]

                  }, {
                      name: 'Air Transat',
                      data: [48, 38, 39, 41, 47, 48, 59, 59, 52, 50, 59, 51]

                  }, {
                      name: 'Porter Airlines',
                      data: [36, 33, 34, 39, 22, 14, 13, 12, 14, 13, 13, 11]

                  }],
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
})(angular.module('myApp.performance', ['ui.router']));
const { i18n } = window.GLOBAL.App;

export const minutesRunCommandsOptions = [
  { name: i18n['every minute'] ?? 'every minute', value: '*' },
  { name: i18n['every two minutes'] ?? 'every two minutes', value: '*/2' },
  { name: `${i18n.every || 'every'} 5`, value: '*/5' },
  { name: `${i18n.every || 'every'} 10`, value: '*/10' },
  { name: `${i18n.every || 'every'} 15`, value: '*/15' },
  { name: `${i18n.every || 'every'} 30`, value: '*/30' }
];

export const hoursRunCommandsOptions = [
  { name: i18n['every hour'] ?? 'every hour', value: '*' },
  { name: i18n['every two hours'] ?? 'every two hours', value: '*/2' },
  { name: `${i18n.every || 'every'} 6`, value: '*/6' },
  { name: `${i18n.every || 'every'} 12`, value: '*/12' }
];

export const daysRunCommandsOptions = [
  { name: i18n['every day'] ?? 'every day', value: '*' },
  { name: i18n['every odd day'] ?? 'every odd day', value: '1-31/2' },
  { name: i18n['every even day'] ?? 'every even day', value: '*/2' },
  { name: `${i18n.every || 'every'} 3`, value: '*/3' },
  { name: `${i18n.every || 'every'} 5`, value: '*/5' },
  { name: `${i18n.every || 'every'} 10`, value: '*/10' },
  { name: `${i18n.every || 'every'} 15`, value: '*/15' }
];

export const hoursOptions = [
  { name: '00', value: '0' },
  { name: '01', value: '1' },
  { name: '02', value: '2' },
  { name: '03', value: '3' },
  { name: '04', value: '4' },
  { name: '05', value: '5' },
  { name: '06', value: '6' },
  { name: '07', value: '7' },
  { name: '08', value: '8' },
  { name: '09', value: '9' },
  { name: '10', value: '10' },
  { name: '11', value: '11' },
  { name: '12', value: '12' },
  { name: '13', value: '13' },
  { name: '14', value: '14' },
  { name: '15', value: '15' },
  { name: '16', value: '16' },
  { name: '17', value: '17' },
  { name: '18', value: '18' },
  { name: '19', value: '19' },
  { name: '20', value: '20' },
  { name: '21', value: '21' },
  { name: '22', value: '22' },
  { name: '23', value: '23' }
];

export const hourlyMinutesOptions = [
  { name: '00', value: '0' },
  { name: '15', value: '15' },
  { name: '30', value: '30' },
  { name: '45', value: '45' }
];

export const dailyMinutesOptions = [
  { name: '00', value: '0' },
  { name: '01', value: '1' },
  { name: '02', value: '2' },
  { name: '05', value: '5' },
  { name: '10', value: '10' },
  { name: '15', value: '15' },
  { name: '20', value: '20' },
  { name: '25', value: '25' },
  { name: '30', value: '30' },
  { name: '35', value: '35' },
  { name: '40', value: '40' },
  { name: '45', value: '45' },
  { name: '50', value: '50' },
  { name: '55', value: '55' }
];

export const weeklyRunCommandOptions = [
  { name: i18n['every day'] ?? 'every day', value: '*' },
  { name: i18n['weekdays (5 days)'] ?? 'weekdays (5 days)', value: '1,2,3,4,5' },
  { name: i18n['weekend (2 days)'] ?? 'weekend (2 days)', value: '0,6' },
  { name: i18n.Monday ?? 'Monday', value: '1' },
  { name: i18n.Tuesday ?? 'Tuesday', value: '2' },
  { name: i18n.Wednesday ?? 'Wednesday', value: '3' },
  { name: i18n.Thursday ?? 'Thursday', value: '4' },
  { name: i18n.Friday ?? 'Friday', value: '5' },
  { name: i18n.Saturday ?? 'Saturday', value: '6' },
  { name: i18n.Sunday ?? 'Sunday', value: '0' }
];

export const monthlyRunCommandOptions = [
  { name: i18n['every month'] ?? 'every month', value: '*' },
  { name: i18n['every odd month'] ?? 'every odd month', value: '1-11/2' },
  { name: i18n['every even month'] ?? 'every even month', value: '*/2' },
  { name: `${i18n.every || 'every'} 3`, value: '*/3' },
  { name: `${i18n.every || 'every'} 6`, value: '*/6' },
  { name: i18n.Jan ?? 'Jan', value: '1' },
  { name: i18n.Feb ?? 'Feb', value: '2' },
  { name: i18n.Mar ?? 'Mar', value: '3' },
  { name: i18n.Apr ?? 'Apr', value: '4' },
  { name: i18n.May ?? 'May', value: '5' },
  { name: i18n.Jun ?? 'Jun', value: '6' },
  { name: i18n.Jul ?? 'Jul', value: '7' },
  { name: i18n.Aug ?? 'Aug', value: '8' },
  { name: i18n.Sep ?? 'Sep', value: '9' },
  { name: i18n.Oct ?? 'Oct', value: '10' },
  { name: i18n.Nov ?? 'Nov', value: '11' },
  { name: i18n.Dec ?? 'Dec', value: '12' }
];

export const dateOptions = [
  { name: '1', value: '1' },
  { name: '2', value: '2' },
  { name: '3', value: '3' },
  { name: '4', value: '4' },
  { name: '5', value: '5' },
  { name: '6', value: '6' },
  { name: '7', value: '7' },
  { name: '8', value: '8' },
  { name: '9', value: '9' },
  { name: '10', value: '10' },
  { name: '11', value: '11' },
  { name: '12', value: '12' },
  { name: '13', value: '13' },
  { name: '14', value: '14' },
  { name: '15', value: '15' },
  { name: '16', value: '16' },
  { name: '17', value: '17' },
  { name: '18', value: '18' },
  { name: '19', value: '19' },
  { name: '20', value: '20' },
  { name: '21', value: '21' },
  { name: '22', value: '22' },
  { name: '23', value: '23' },
  { name: '24', value: '24' },
  { name: '25', value: '25' },
  { name: '26', value: '26' },
  { name: '27', value: '27' },
  { name: '28', value: '28' },
  { name: '29', value: '29' },
  { name: '30', value: '30' },
  { name: '31', value: '31' }
];
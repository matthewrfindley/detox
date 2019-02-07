describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  
  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });
  
  it('should show hello screen after tap', async () => {
    await element(by.id('hello_button')).tap();
    await expect(element(by.text('Hello!!!'))).toBeVisible();
  });
  
  it('should show world screen after tap', async () => {
    await element(by.id('world_button')).tap();
    await expect(element(by.text('World!!!'))).toBeVisible();
  });

  it('should select the correct date', async () => {
    await element(by.id('world_button')).tap();

    await element(by.type('UIPickerView')).setDatePickerDateIOSOnly("2019-2-8T05:10:00-08:00", "yyyy-MM-dd'T'HH:mm:ssZZZZZ")
    /* await element(by.type('UIPickerView')).setColumnToValue(0, 'Feb 8');
     * await element(by.type('UIPickerView')).setColumnToValue(2, '10');
     * await element(by.type('UIPickerView')).setColumnToValue(1, '5');
     * await element(by.type('UIPickerView')).setColumnToValue(3, 'AM'); */
    
    await expect(element(by.id('selected_month').and(by.text('2')))).toBeVisible();
    await expect(element(by.id('selected_day').and(by.text('8')))).toBeVisible();
    await expect(element(by.id('selected_hours').and(by.text('5')))).toBeVisible();
    await expect(element(by.id('selected_minutes').and(by.text('10')))).toBeVisible();            
    await expect(element(by.id('selected_year').and(by.text('2019')))).toBeVisible();
  });    
});

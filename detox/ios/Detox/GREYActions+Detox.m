//
//  GREYActions+Detox.m
//  Detox
//
//  Created by Matt Findley on 2/7/19.
//  Copyright © 2019 Wix. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "GREYActions+Detox.h"
#import <EarlGrey/GREYActions.h>

@implementation GREYActions (Detox)

+ (id<GREYAction>)detoxSetDatePickerDateIOSOnly:(NSString *)dateString withFormat:(NSString *)dateFormat
{
	// would be nice to throw if the element is not a datepicker
	// this seems to add this function to any element
	NSDateFormatter *formatter = [[NSDateFormatter alloc] init];
  	formatter.dateFormat = dateFormat;
	
	NSDate *date = [formatter dateFromString:dateString];
	return [GREYActions actionForSetDate:date];
}
@end

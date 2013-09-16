var grassTilemap =   [
              [349,350,351,352,353,354,349,350,351,352,353,354,349,350,351,352,353,354,349,350,351,352,353,354,389,390,349,350,351,352,353,354]
            , [379,380,381,382,383,384,379,380,381,382,383,384,379,380,381,382,383,384,379,380,381,382,383,384,419,420,379,380,381,382,383,384]
            , [409,410,411,412,413,414,409,410,411,412,413,414,409,410,411,412,413,414,409,410,411,412,413,414,449,450,409,410,411,412,413,414]
            , [349,350,351,352,353,354,349,350,351,352,353,354,349,350,351,352,353,354,349,350,351,352,353,354,479,480,349,350,351,352,353,354]
            , [379,380,381,382,383,384,379,380,381,382,383,384,379,380,381,382,383,384,379,380,381,382,383,384,389,390,379,380,381,382,383,384]
            , [409,410,411,412,413,414,409,410,411,412,413,414,409,410,411,412,413,414,409,410,411,412,413,414,419,420,409,410,411,412,413,414]
            , [349,350,351,352,353,354,349,350,351,352,353,354,349,350,351,352,353,354,349,350,351,352,353,354,449,450,349,350,351,352,353,354]
            , [379,380,381,382,383,384,379,380,381,382,383,384,379,380,381,382,383,384,379,380,381,382,383,384,479,480,379,380,381,382,383,384]
            , [409,410,411,412,413,414,409,410,411,412,413,414,409,410,411,412,413,414,409,410,411,412,413,414,389,390,409,410,411,412,413,414]
            , [349,350,351,352,353,354,349,350,351,352,353,354,349,350,351,352,353,354,349,350,351,352,353,354,419,420,349,350,351,352,353,354]
            , [379,380,381,382,383,384,379,380,381,382,383,384,379,380,381,382,383,384,379,380,381,382,383,384,449,450,379,380,381,382,383,384]
            , [409,410,411,412,413,414,409,410,411,412,413,414,409,410,411,412,413,414,409,410,411,412,413,414,479,480,409,410,411,412,413,414]
            , [349,350,351,352,353,354,349,350,351,352,353,354,349,350,351,352,353,354,349,350,351,352,353,354,389,390,349,350,351,352,353,354]
            , [379,380,381,382,383,384,379,380,381,382,383,384,379,380,381,382,383,384,379,380,381,382,383,384,419,420,379,380,381,382,383,384]
            , [409,410,411,412,413,414,409,410,411,412,413,414,409,410,411,412,413,414,409,410,411,412,413,414,449,450,409,410,411,412,413,414]
            , [349,350,351,352,353,354,349,350,351,352,353,354,349,350,351,352,353,354,349,350,351,352,353,354,479,480,349,350,351,352,353,354]
            , [379,380,381,382,383,384,379,380,381,382,383,384,379,380,381,382,383,384,379,380,381,382,383,384,389,390,379,380,381,382,383,384]
            , [409,410,411,412,413,414,409,410,411,412,413,414,409,410,411,412,413,414,409,410,411,412,413,414,419,420,409,410,411,412,413,414]
            , [349,350,351,352,353,354,349,350,351,352,353,354,349,350,351,352,353,354,349,350,351,352,353,354,449,450,349,350,351,352,353,354]
            , [379,380,381,382,383,384,379,380,381,382,383,384,379,380,381,382,383,384,379,380,381,382,383,384,479,480,379,380,381,382,383,384]
            , [409,410,411,412,413,414,409,410,411,412,413,414,409,410,411,412,413,414,409,410,411,412,413,414,389,390,409,410,411,412,413,414]
            , [349,350,351,352,353,354,349,350,351,352,353,354,349,350,351,352,353,354,349,350,351,352,353,354,419,420,349,350,351,352,353,354]
            , [379,380,381,382,383,384,379,380,381,382,383,384,379,380,381,382,383,384,379,380,381,382,383,384,449,450,379,380,381,382,383,384]
            , [409,410,411,412,413,414,409,410,411,412,413,414,409,410,411,412,413,414,409,410,411,412,413,414,479,480,409,410,411,412,413,414]
              ];

var objectsTilemap = [
              [1405,1406,1407,1408,1409,1410,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15]
            , [1435,1436,1437,1438,1439,1440,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,871,872,873,874,875,15,15]
            , [1465,1466,1467,1468,1469,1470,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,901,902,903,904,905,15,15]
            , [1495,1496,1497,1498,1499,1500,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,931,932,933,934,935,15,15]
            , [1525,1526,1527,1528,1529,1530,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,961,962,963,964,965,15,15]
            , [1555,1556,1557,1558,1559,1560,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,991,992,993,994,995,15,15]
            , [1585,1586,1587,1588,1589,1590,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,1021,1022,1023,1024,1025,15,15]
            , [15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15]
            , [15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,7,8,9,15,15,15]
            , [15,15,15,565,566,567,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,37,38,39,15,15,15]
            , [15,15,15,595,596,597,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,67,68,69,15,15,15]
            , [15,15,15,625,626,627,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15]
            , [15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,568,569,570,15]
            , [15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,598,599,600,15]
            , [15,661,662,663,664,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,628,629,630,15]
            , [15,691,692,693,694,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15]
            , [15,721,722,723,724,15,15,15,15,15,15,15,1351,1352,1353,1354,1355,15,15,15,15,15,15,15,15,15,469,470,471,472,473,474]
            , [15,751,752,753,754,15,15,15,15,15,15,15,1381,1382,1383,1384,1385,15,15,15,15,15,15,15,15,15,499,500,501,502,503,504]
            , [15,781,782,783,784,15,15,15,15,15,15,15,1411,1412,1413,1414,1415,15,15,15,15,15,15,15,15,15,529,530,531,532,533,534]
            , [15,811,812,813,814,15,15,15,15,15,15,15,1441,1442,1443,1444,1445,15,7,8,9,15,15,15,15,15,559,560,561,562,563,564]
            , [15,15,15,15,15,15,15,15,15,15,15,15,1471,1472,1473,1474,1475,15,37,38,39,15,565,566,567,15,589,590,591,592,593,594]
            , [15,15,15,15,15,15,15,15,15,15,15,15,1501,1502,1503,1504,1505,15,67,68,69,15,595,596,597,15,619,620,621,622,623,624]
            , [15,15,15,15,15,15,15,15,15,15,15,15,1531,1532,1533,1534,1535,15,15,15,15,15,625,626,627,15,649,650,651,652,653,654]
            , [15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,679,680,681,682,683,684]
              ];

const DATE = "2026-11-05";
const HOME_DISTRICT = "Udupi";
const FOOTER_NOTE = "Rates are indicative. Please confirm with your local dealer before selling.";

// State | District | Kannada | Yesterday farm | Today farm | Wholesale | Retail | Chick
const RATE_TABLE = `
Karnataka | Udupi | ಉಡುಪಿ | 116 | 116 | 130 | 207 | 42
Karnataka | Dakshina Kannada (Mangaluru) | ದಕ್ಷಿಣ ಕನ್ನಡ (ಮಂಗಳೂರು) | 118 | 118 | 132 | 210 | 42
Karnataka | Belagavi (Belgaum) | ಬೆಳಗಾವಿ | 121 | 121 | 135 | 215 | 44
Karnataka | Bengaluru Urban | ಬೆಂಗಳೂರು ನಗರ | 123 | 123 | 137 | 219 | 45
Karnataka | Uttara Kannada (Karwar/Sirsi) | ಉತ್ತರ ಕನ್ನಡ | 117 | 117 | 131 | 209 | 42
Karnataka | Shivamogga | ಶಿವಮೊಗ್ಗ | 115 | 115 | 129 | 205 | 41
Karnataka | Chikkamagaluru | ಚಿಕ್ಕಮಗಳೂರು | 115 | 115 | 129 | 205 | 41
Karnataka | Kodagu (Madikeri) | ಕೊಡಗು | 119 | 119 | 133 | 212 | 43
Karnataka | Mysuru | ಮೈಸೂರು | 118 | 118 | 132 | 210 | 43
Karnataka | Hassan | ಹಾಸನ | 114 | 114 | 128 | 204 | 41
Karnataka | Davanagere | ದಾವಣಗೆರೆ | 113 | 113 | 127 | 202 | 40
Karnataka | Hubballi-Dharwad | ಹುಬ್ಬಳ್ಳಿ-ಧಾರವಾಡ | 117 | 117 | 131 | 209 | 42
Karnataka | Tumakuru | ತುಮಕೂರು | 119 | 119 | 133 | 212 | 43
Karnataka | Mandya | ಮಂಡ್ಯ | 117 | 117 | 131 | 209 | 42
Karnataka | Bengaluru Rural (Hoskote) | ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ | 121 | 121 | 135 | 215 | 44
Karnataka | Kalaburagi (Gulbarga) | ಕಲಬುರಗಿ | 120 | 120 | 134 | 214 | 43
Karnataka | Ballari | ಬಳ್ಳಾರಿ | 116 | 116 | 130 | 207 | 42
Karnataka | Vijayapura (Bijapur) | ವಿಜಯಪುರ | 119 | 119 | 133 | 212 | 43
Karnataka | Bagalkot | ಬಾಗಲಕೋಟೆ | 117 | 117 | 131 | 209 | 42
Karnataka | Bidar | ಬೀದರ್ | 121 | 121 | 135 | 215 | 44
Karnataka | Raichur | ರಾಯಚೂರು | 117 | 117 | 131 | 209 | 42
Karnataka | Koppal | ಕೊಪ್ಪಳ | 115 | 115 | 129 | 205 | 41
Karnataka | Gadag | ಗದಗ | 115 | 115 | 129 | 205 | 41
Karnataka | Haveri | ಹಾವೇರಿ | 114 | 114 | 128 | 204 | 41
Karnataka | Chitradurga | ಚಿತ್ರದುರ್ಗ | 113 | 113 | 127 | 202 | 40
Karnataka | Kolar | ಕೋಲಾರ | 120 | 120 | 134 | 214 | 44
Karnataka | Chikkaballapura | ಚಿಕ್ಕಬಳ್ಳಾಪುರ | 120 | 120 | 134 | 214 | 44
Karnataka | Ramanagara | ರಾಮನಗರ | 120 | 120 | 134 | 214 | 43
Karnataka | Yadgir | ಯಾದಗಿರಿ | 118 | 118 | 132 | 210 | 42
Karnataka | Chamarajanagar | ಚಾಮರಾಜನಗರ | 118 | 118 | 132 | 210 | 42
Karnataka | Vijayanagara (Hosapete) | ವಿಜಯನಗರ | 115 | 115 | 129 | 205 | 41
Kerala | Kasaragod | ಕಾಸರಗೋಡು (ಕೇರಳ) | 126 | 126 | 140 | 224 | 46
Kerala | Kannur | ಕಣ್ಣೂರು (ಕೇರಳ) | 127 | 127 | 141 | 225 | 46
Kerala | Wayanad | ವಯನಾಡ್ (ಕೇರಳ) | 125 | 125 | 139 | 222 | 45
Kerala | Kozhikode (Calicut) | ಕೋಝಿಕೋಡ್ | 128 | 128 | 142 | 227 | 47
Kerala | Malappuram | ಮಲಪ್ಪುರಂ | 127 | 127 | 141 | 225 | 46
Kerala | Palakkad | ಪಾಲಕ್ಕಾಡ್ | 122 | 122 | 136 | 217 | 44
Kerala | Thrissur | ತ್ರಿಶೂರ್ | 125 | 125 | 139 | 222 | 45
Kerala | Ernakulam (Kochi) | ಎರ್ನಾಕುಲಂ (ಕೊಚ್ಚಿ) | 129 | 129 | 143 | 229 | 47
Kerala | Idukki | ಇಡುಕ್ಕಿ | 130 | 130 | 144 | 230 | 47
Kerala | Kottayam | ಕೊಟ್ಟಾಯಂ | 128 | 128 | 142 | 227 | 46
Kerala | Alappuzha | ಆಲಪ್ಪುಳ | 128 | 128 | 142 | 227 | 46
Kerala | Pathanamthitta | ಪತ್ತನಂತಿಟ್ಟ | 129 | 129 | 143 | 229 | 47
Kerala | Kollam | ಕೊಲ್ಲಂ | 128 | 128 | 142 | 227 | 46
Kerala | Thiruvananthapuram | ತಿರುವನಂತಪುರಂ | 131 | 131 | 145 | 232 | 48
Maharashtra | Kolhapur | ಕೊಲ್ಹಾಪುರ (ಮಹಾರಾಷ್ಟ್ರ) | 124 | 124 | 138 | 220 | 45
Maharashtra | Sangli (Miraj) | ಸಾಂಗ್ಲಿ (ಮಹಾರಾಷ್ಟ್ರ) | 123 | 123 | 137 | 219 | 44
Maharashtra | Sindhudurg (Kudal) | ಸಿಂಧುದುರ್ಗ | 125 | 125 | 139 | 222 | 45
Maharashtra | Satara | ಸಾತಾರಾ | 122 | 122 | 136 | 217 | 44
Maharashtra | Solapur | ಸೊಲ್ಲಾಪುರ | 120 | 120 | 134 | 214 | 43
Maharashtra | Pune (Baramati Hub) | ಪುಣೆ (ಬಾರಾಮತಿ) | 125 | 125 | 139 | 222 | 45
Maharashtra | Ratnagiri | ರತ್ನಗಿರಿ | 126 | 126 | 140 | 224 | 45
Maharashtra | Mumbai Metropolitan | ಮುಂಬೈ | 132 | 132 | 146 | 234 | 48
Maharashtra | Thane / Palghar | ಥಾಣೆ | 130 | 130 | 144 | 230 | 47
Maharashtra | Raigad (Panvel) | ರಾಯಗಡ್ | 128 | 128 | 142 | 227 | 46
Maharashtra | Nashik (Malegaon Hub) | ನಾಸಿಕ್ | 123 | 123 | 137 | 219 | 44
Maharashtra | Ahilyanagar (Ahmednagar) | ಅಹಿಲ್ಯಾನಗರ | 122 | 122 | 136 | 217 | 44
Maharashtra | Chhatrapati Sambhajinagar | ಛತ್ರಪತಿ ಸಂಭಾಜಿನಗರ | 121 | 121 | 135 | 215 | 44
Maharashtra | Latur | ಲಾತೂರ್ | 120 | 120 | 134 | 214 | 43
Maharashtra | Nanded | ನಾಂದೇಡ್ | 121 | 121 | 135 | 215 | 43
Maharashtra | Beed | ಬೀಡ್ | 120 | 120 | 134 | 214 | 43
Maharashtra | Jalgaon | ಜಲಗಾಂವ್ | 121 | 121 | 135 | 215 | 43
Maharashtra | Nagpur (Vidarbha Hub) | ನಾಗ್ಪುರ | 124 | 124 | 138 | 220 | 45
Other States | Namakkal (Poultry Zone) | ನಾಮಕ್ಕಲ್ (ತಮಿಳುನಾಡು) | 114 | 114 | 128 | 204 | 40
Other States | Coimbatore (Palladam BCC) | ಕೊಯಮತ್ತೂರು (ಪಲ್ಲಡಂ) | 115 | 115 | 129 | 205 | 41
Other States | Erode | ಈರೋಡ್ (ತಮಿಳುನಾಡು) | 115 | 115 | 129 | 205 | 41
Other States | Salem | ಸೇಲಂ (ತಮಿಳುನಾಡು) | 116 | 116 | 130 | 207 | 41
Other States | Chennai Metro | ಚೆನ್ನೈ (ತಮಿಳುನಾಡು) | 124 | 124 | 138 | 220 | 45
Other States | North Goa (Panaji/Mapusa) | ಉತ್ತರ ಗೋವಾ | 129 | 129 | 143 | 229 | 47
Other States | South Goa (Margao) | ದಕ್ಷಿಣ ಗೋವಾ | 128 | 128 | 142 | 227 | 47
Other States | Hyderabad (Telangana) | ಹೈದರಾಬಾದ್ (ತೆಲಂಗಾಣ) | 122 | 122 | 136 | 217 | 44
Other States | Karimnagar (Telangana) | ಕರೀಂನಗರ | 119 | 119 | 133 | 212 | 43
Other States | Warangal (Telangana) | ವರಂಗಲ್ | 120 | 120 | 134 | 214 | 43
Other States | Nizamabad (Telangana) | ನಿಜಾಮಾಬಾದ್ | 120 | 120 | 134 | 214 | 43
Other States | Chittoor (AP) | ಚಿತ್ತೂರು (ಆಂಧ್ರ) | 118 | 118 | 132 | 210 | 42
Other States | Anantapur (AP) | ಅನಂತಪುರ (ಆಂಧ್ರ) | 116 | 116 | 130 | 207 | 41
Other States | Vijayawada / Krishna (AP) | ವಿಜಯವಾಡ (ಆಂಧ್ರ) | 121 | 121 | 135 | 215 | 43
Other States | Guntur (AP) | ಗುಂಟೂರು (ಆಂಧ್ರ) | 120 | 120 | 134 | 214 | 43
`;

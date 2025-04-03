// Website data structure 
const DATA = {
    "HDRI-TEXTURES-MATERIALS": [
        {
            name: "Polyhaven",
            url: "https://polyhaven.com/",
            description: "Thư viện 3D miễn phí chất lượng cao với hàng nghìn HDRI, texture và model",
            rights: "Miễn phí, CC0 license"
        },
        {
            name: "Ambientcg",
            url: "https://ambientcg.com/",
            description: "Thư viện texture PBR, HDRI chất lượng cao",
            rights: "Miễn phí, CC0 license"
        },
        {
            name: "3DTextures",
            url: "https://3dtextures.me/",
            description: "Texture chất lượng cao, định dạng PBR",
            rights: "Miễn phí, CC0 license"
        },
        {
            name: "Textures.com",
            url: "https://www.textures.com/",
            description: "Thư viện texture đồ sộ, nhiều chủ đề",
            rights: "Miễn phí có giới hạn, trả phí"
        },
        {
            name: "FreePBR",
            url: "https://freepbr.com/",
            description: "Texture PBR miễn phí, chất lượng tốt",
            rights: "Miễn phí, không rõ license"
        }
    ],
    "MODELS": [
        {
            name: "TurboSquid",
            url: "https://www.turbosquid.com/",
            description: "Kho model 3D lớn nhất, đa dạng chủ đề và định dạng",
            rights: "Free & Paid"
        },
        {
            name: "Sketchfab",
            url: "https://sketchfab.com/",
            description: "Nền tảng chia sẻ model 3D phổ biến",
            rights: "Free & Paid"
        },
        {
            name: "CGTrader",
            url: "https://www.cgtrader.com/",
            description: "Marketplace model 3D lớn, giá cả phải chăng",
            rights: "Free & Paid"
        },
        {
            name: "Free3D",
            url: "https://free3d.com/",
            description: "Model 3D miễn phí và trả phí đa dạng chủ đề",
            rights: "Free & Paid"
        },
        {
            name: "Archive3D",
            url: "https://archive3d.net/",
            description: "Model 3D miễn phí chủ yếu về nội thất",
            rights: "Miễn phí, không rõ license"
        }
    ],
    "CREATE MODELS": [
        {
            name: "Blender",
            url: "https://www.blender.org/",
            description: "Phần mềm 3D mã nguồn mở mạnh mẽ",
            rights: "Free, Open Source"
        },
        {
            name: "MagicaVoxel",
            url: "https://ephtracy.github.io/",
            description: "Công cụ tạo model 3D dạng voxel đơn giản",
            rights: "Free"
        },
        {
            name: "SketchUp Free",
            url: "https://www.sketchup.com/plans-and-pricing/sketchup-free",
            description: "Công cụ modeling trực tuyến dễ sử dụng",
            rights: "Free version"
        },
        {
            name: "Tinkercad",
            url: "https://www.tinkercad.com/",
            description: "Công cụ modeling đơn giản, phù hợp người mới",
            rights: "Free"
        },
        {
            name: "SculptGL",
            url: "https://stephaneginier.com/sculptgl/",
            description: "Công cụ sculpting 3D trực tuyến",
            rights: "Free, Open Source"
        }
    ],
    "MATERIALS-TEXTURES": [
        {
            name: "Materialize",
            url: "http://boundingboxsoftware.com/materialize/",
            description: "Công cụ tạo texture PBR từ ảnh đầu vào",
            rights: "Free"
        },
        {
            name: "ArmorPaint",
            url: "https://armorpaint.org/",
            description: "Phần mềm vẽ texture trực tiếp lên model 3D",
            rights: "Paid, Open Source"
        },
        {
            name: "Quixel Mixer",
            url: "https://quixel.com/mixer",
            description: "Công cụ tạo texture từ thư viện Megascans",
            rights: "Free with Unreal Engine"
        },
        {
            name: "Substance Designer",
            url: "https://www.substance3d.com/products/substance-designer/",
            description: "Phần mềm tạo texture procedural chuyên nghiệp",
            rights: "Paid, Subscription"
        },
        {
            name: "AwesomeBump",
            url: "https://github.com/kmkolasinski/AwesomeBump",
            description: "Công cụ tạo map normal, specular từ ảnh",
            rights: "Free, Open Source"
        }
    ],
    "IES LIGHT": [
        {
            name: "IESLibrary",
            url: "https://ieslibrary.com/en/home",
            description: "Thư viện profile đèn IES đa dạng",
            rights: "Free & Paid"
        },
        {
            name: "Lithonia Lighting",
            url: "https://www.acuitybrands.com/resources/tools-and-documents/photometric-files",
            description: "Thư viện IES từ nhà sản xuất đèn lớn",
            rights: "Free"
        },
        {
            name: "CGAxis",
            url: "https://cgaxis.com/product-category/free-3d-models/free-ies-profiles/",
            description: "Profile IES miễn phí chất lượng tốt",
            rights: "Free collection"
        }
    ],
    "SOUND FILES": [
        {
            name: "Freesound",
            url: "https://freesound.org/",
            description: "Thư viện âm thanh đa dạng, cộng đồng lớn",
            rights: "Free with various licenses"
        },
        {
            name: "ZapSplat",
            url: "https://www.zapsplat.com/",
            description: "Thư viện âm thanh và nhạc nền chất lượng cao",
            rights: "Free with attribution"
        },
        {
            name: "SoundBible",
            url: "https://soundbible.com/",
            description: "Âm thanh miễn phí đa dạng thể loại",
            rights: "Free with various licenses"
        }
    ],
    "WEBSITES": [
        {
            name: "ArchDaily",
            url: "https://www.archdaily.com/",
            description: "Trang tin kiến trúc lớn, cập nhật dự án mới",
            rights: "Free content"
        },
        {
            name: "Dezeen",
            url: "https://www.dezeen.com/",
            description: "Tạp chí kiến trúc và thiết kế trực tuyến",
            rights: "Free content"
        },
        {
            name: "Behance",
            url: "https://www.behance.net/search/projects?field=interior%20design",
            description: "Nền tảng trưng bày dự án sáng tạo, nhiều dự án nội thất",
            rights: "Free content"
        }
    ]
};

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_z_K0Z3wMxGjVRSOYkz3ClghUNLUZZSA",
    authDomain: "interior-resource-hub.firebaseapp.com",
    projectId: "interior-resource-hub",
    storageBucket: "interior-resource-hub.appspot.com",
    messagingSenderId: "264587542388",
    appId: "1:264587542388:web:4e5e1a9b1f9ff493d33ed4"
};

// Global variables
let currentCategory = '';
let currentUrl = '';
let settings = {
    language: 'vi',
    theme: 'light'
};
let currentUser = null;
let userWebsites = {};
let firebase; // Declare firebase variable

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded, initializing application...");
    
    // Load saved settings if available
    loadSettings();
    
    // Create category buttons
    populateCategories();
    
    // Select first category by default
    const firstCategory = Object.keys(DATA)[0];
    selectCategory(firstCategory);
    
    // Set up event listeners
    document.getElementById('settings-button').addEventListener('click', openSettingsModal);
    document.getElementById('about-button').addEventListener('click', openAboutModal);
    document.getElementById('login-button').addEventListener('click', handleLogin);
    document.getElementById('account-button').addEventListener('click', openAccountModal);
    document.getElementById('add-category-form').addEventListener('submit', handleAddCategory);
    document.getElementById('add-website-form').addEventListener('submit', handleAddWebsite);
    
    // Set up modal close buttons
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.style.display = 'none';
        });
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
    
    // Set up settings form submission
    document.getElementById('settings-form').addEventListener('submit', function(e) {
        e.preventDefault();
        saveSettings();
    });
    
    // Set up tab switching in settings modal
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            
            // Update active tab button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Show selected tab content
            const tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(content => {
                content.style.display = 'none';
            });
            document.getElementById(tabId).style.display = 'block';
        });
    });
    
    // Show first tab by default
    document.querySelector('.tab-button').click();
    
    // Initialize Firebase
    initializeFirebase();
});

// Initialize Firebase
function initializeFirebase() {
    console.log("Initializing Firebase...");
    
    // Check if Firebase SDK is loaded
    if (typeof window.firebase !== 'undefined') {
        firebase = window.firebase;
        
        try {
            // Initialize Firebase app
            if (!firebase.apps.length) {
                firebase.initializeApp(firebaseConfig);
                console.log("Firebase initialized successfully");
            } else {
                console.log("Firebase already initialized");
            }
            
            // Set up authentication state change listener
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    // User is signed in
                    console.log("User is signed in:", user.email);
                    console.log("User details:", user);
                    currentUser = user;
                    updateUIForSignedInUser();
                    loadUserData();
                } else {
                    // User is signed out
                    console.log("User is signed out");
                    currentUser = null;
                    updateUIForSignedOutUser();
                }
            }, function(error) {
                console.error("Auth state change error:", error);
            });
        } catch (error) {
            console.error("Firebase initialization error:", error);
            updateStatus("Lỗi khởi tạo Firebase: " + error.message);
        }
    } else {
        console.error("Firebase SDK is not loaded - will not be able to use Firebase services");
        updateStatus("Không thể tải Firebase SDK. Một số tính năng sẽ không hoạt động.");
    }
}

// Handle login with Google
function handleLogin() {
    console.log("Login button clicked");
    updateStatus("Đang xử lý đăng nhập...");
    
    if (typeof firebase === 'undefined' || !firebase.auth) {
        console.error("Firebase Auth is not available");
        alert("Lỗi xác thực: Firebase Auth không khả dụng. Vui lòng tải lại trang.");
        updateStatus("Lỗi xác thực: Firebase Auth không khả dụng");
        return;
    }
    
    if (currentUser) {
        // User is already signed in, sign out
        console.log("Signing out...");
        updateStatus("Đang đăng xuất...");
        
        firebase.auth().signOut().then(() => {
            console.log("Signed out successfully");
            currentUser = null;
            updateUIForSignedOutUser();
            updateStatus("Đã đăng xuất");
        }).catch((error) => {
            console.error('Error signing out:', error);
            alert("Lỗi khi đăng xuất: " + error.message);
            updateStatus("Lỗi khi đăng xuất: " + error.message);
        });
    } else {
        // User is signed out, sign in
        console.log("Preparing Google sign-in...");
        updateStatus("Đang chuẩn bị đăng nhập với Google...");
        
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            console.log("Google provider created");
            
            // Add scopes if needed
            provider.addScope('profile');
            provider.addScope('email');
            
            // Show the login popup
            console.log("Showing Google sign-in popup...");
            firebase.auth().signInWithPopup(provider).then((result) => {
                console.log("Sign in successful:", result.user.email);
                currentUser = result.user;
                updateUIForSignedInUser();
                loadUserData();
                updateStatus("Đăng nhập thành công: " + currentUser.email);
            }).catch((error) => {
                console.error('Error signing in:', error);
                console.error('Error code:', error.code);
                console.error('Error message:', error.message);
                
                let errorMessage = error.message;
                if (error.code === 'auth/popup-blocked') {
                    errorMessage = "Popup bị chặn. Vui lòng cho phép popup từ trang web này.";
                } else if (error.code === 'auth/popup-closed-by-user') {
                    errorMessage = "Đăng nhập bị hủy bởi người dùng.";
                }
                
                alert("Lỗi đăng nhập: " + errorMessage);
                updateStatus("Đăng nhập thất bại: " + errorMessage);
            });
        } catch (error) {
            console.error('Exception during sign in:', error);
            alert("Lỗi: " + error.message);
            updateStatus("Lỗi: " + error.message);
        }
    }
}

// Update UI for signed in user
function updateUIForSignedInUser() {
    const loginButton = document.getElementById('login-button');
    const accountButton = document.getElementById('account-button');
    const manageTab = document.getElementById('manage-tab-button');
    
    // Update login button to logout
    loginButton.innerHTML = `<i class="fas fa-sign-out-alt"></i>`;
    loginButton.title = settings.language === 'vi' ? 'Đăng xuất' : 'Sign out';
    
    // Show account button
    accountButton.style.display = 'block';
    
    // Show manage tab in settings
    manageTab.style.display = 'block';
    
    // Update status
    updateStatus(settings.language === 'vi' ? 
        `Đã đăng nhập với ${currentUser.email}` : 
        `Signed in as ${currentUser.email}`);
}

// Update UI for signed out user
function updateUIForSignedOutUser() {
    const loginButton = document.getElementById('login-button');
    const accountButton = document.getElementById('account-button');
    const manageTab = document.getElementById('manage-tab-button');
    
    // Update logout button to login
    loginButton.innerHTML = `<i class="fas fa-sign-in-alt"></i>`;
    loginButton.title = settings.language === 'vi' ? 'Đăng nhập' : 'Sign in';
    
    // Hide account button
    accountButton.style.display = 'none';
    
    // Hide manage tab in settings
    manageTab.style.display = 'none';
    
    // Update status
    updateStatus(settings.language === 'vi' ? 'Chưa đăng nhập' : 'Not signed in');
}

// Load user data from Firestore
function loadUserData() {
    if (!currentUser || !firebase.firestore) return;
    console.log("Loading user data...");
    
    const db = firebase.firestore();
    
    // Load user's custom categories and websites
    db.collection('users').doc(currentUser.uid).get()
        .then((doc) => {
            if (doc.exists) {
                const userData = doc.data();
                console.log("User data loaded:", userData);
                
                if (userData.websites) {
                    userWebsites = userData.websites;
                    
                    // Merge user websites with default DATA
                    for (const category in userWebsites) {
                        if (DATA[category]) {
                            // Category exists, add user websites to it
                            DATA[category] = [...DATA[category], ...userWebsites[category]];
                        } else {
                            // New category, add it to DATA
                            DATA[category] = userWebsites[category];
                        }
                    }
                    
                    // Refresh UI
                    populateCategories();
                    if (currentCategory) {
                        selectCategory(currentCategory);
                    }
                }
            } else {
                console.log("No user data found, creating empty record");
                // Create empty record for new user
                db.collection('users').doc(currentUser.uid).set({
                    websites: {},
                    created: firebase.firestore.FieldValue.serverTimestamp()
                });
                userWebsites = {};
            }
        })
        .catch((error) => {
            console.error('Error loading user data:', error);
            alert("Lỗi khi tải dữ liệu: " + error.message);
        });
}

// Handle adding a new category
function handleAddCategory(e) {
    e.preventDefault();
    
    if (!currentUser) {
        alert(settings.language === 'vi' ? 
            'Bạn cần đăng nhập để thêm danh mục' : 
            'You need to be signed in to add a category');
        return;
    }
    
    const categoryInput = document.getElementById('new-category-name');
    const categoryName = categoryInput.value.trim();
    
    if (!categoryName) {
        alert(settings.language === 'vi' ? 
            'Tên danh mục không được để trống' : 
            'Category name cannot be empty');
        return;
    }
    
    // Check if category already exists
    if (DATA[categoryName]) {
        alert(settings.language === 'vi' ? 
            'Danh mục này đã tồn tại' : 
            'This category already exists');
        return;
    }
    
    // Add new category to DATA
    DATA[categoryName] = [];
    
    // Add to user's data in Firestore
    if (!userWebsites[categoryName]) {
        userWebsites[categoryName] = [];
    }
    
    saveUserData().then(() => {
        // Clear input
        categoryInput.value = '';
        
        // Refresh UI
        populateCategories();
        selectCategory(categoryName);
        
        // Close modal
        document.getElementById('settings-modal').style.display = 'none';
        
        // Show success message
        updateStatus(settings.language === 'vi' ? 
            `Đã thêm danh mục "${categoryName}"` : 
            `Added category "${categoryName}"`);
    }).catch(error => {
        console.error("Error saving category:", error);
        alert("Lỗi khi lưu danh mục: " + error.message);
    });
}

// Handle adding a new website
function handleAddWebsite(e) {
    e.preventDefault();
    
    if (!currentUser) {
        alert(settings.language === 'vi' ? 
            'Bạn cần đăng nhập để thêm trang web' : 
            'You need to be signed in to add a website');
        return;
    }
    
    const nameInput = document.getElementById('new-website-name');
    const urlInput = document.getElementById('new-website-url');
    const descriptionInput = document.getElementById('new-website-description');
    const rightsInput = document.getElementById('new-website-rights');
    const categorySelect = document.getElementById('new-website-category');
    
    const name = nameInput.value.trim();
    const url = urlInput.value.trim();
    const description = descriptionInput.value.trim();
    const rights = rightsInput.value.trim();
    const category = categorySelect.value;
    
    if (!name || !url || !category) {
        alert(settings.language === 'vi' ? 
            'Tên, URL và danh mục không được để trống' : 
            'Name, URL and category cannot be empty');
        return;
    }
    
    // Validate URL
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        alert(settings.language === 'vi' ? 
            'URL phải bắt đầu bằng http:// hoặc https://' : 
            'URL must start with http:// or https://');
        return;
    }
    
    // Create new website object
    const newWebsite = {
        name,
        url,
        description,
        rights
    };
    
    // Add to DATA
    if (!DATA[category]) {
        DATA[category] = [];
    }
    DATA[category].push(newWebsite);
    
    // Add to user's data
    if (!userWebsites[category]) {
        userWebsites[category] = [];
    }
    userWebsites[category].push(newWebsite);
    
    saveUserData().then(() => {
        // Clear inputs
        nameInput.value = '';
        urlInput.value = '';
        descriptionInput.value = '';
        rightsInput.value = '';
        
        // Refresh UI if we're on this category
        if (currentCategory === category) {
            populateWebsites(category);
        }
        
        // Close modal
        document.getElementById('settings-modal').style.display = 'none';
        
        // Show success message
        updateStatus(settings.language === 'vi' ? 
            `Đã thêm "${name}" vào danh mục "${category}"` : 
            `Added "${name}" to category "${category}"`);
    }).catch(error => {
        console.error("Error saving website:", error);
        alert("Lỗi khi lưu trang web: " + error.message);
    });
}

// Save user data to Firestore
function saveUserData() {
    if (!currentUser || !firebase.firestore) return Promise.reject('Not signed in or Firestore not available');
    
    console.log("Saving user data:", userWebsites);
    const db = firebase.firestore();
    return db.collection('users').doc(currentUser.uid).set({
        websites: userWebsites,
        lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
}

// Open account modal
function openAccountModal() {
    if (!currentUser) return;
    
    const modal = document.getElementById('account-modal');
    const accountInfo = document.getElementById('account-info');
    
    // Update account info
    accountInfo.innerHTML = `
        <div class="account-profile">
            <img src="${currentUser.photoURL || 'img/user.png'}" alt="Profile photo" class="profile-photo">
            <div class="account-details">
                <h3>${currentUser.displayName || currentUser.email}</h3>
                <p>${currentUser.email}</p>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Populate category buttons in top nav
function populateCategories() {
    const categoryContainer = document.querySelector('.category-container');
    
    // Clear any existing buttons
    categoryContainer.innerHTML = '';
    
    // Create buttons for each category
    Object.keys(DATA).forEach(category => {
        const button = document.createElement('button');
        button.className = 'category-button';
        button.textContent = category;
        button.dataset.category = category;
        button.addEventListener('click', function() {
            selectCategory(category);
        });
        
        categoryContainer.appendChild(button);
    });
    
    // Update category select in add website form
    const categorySelect = document.getElementById('new-website-category');
    categorySelect.innerHTML = '';
    
    Object.keys(DATA).forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
}

// Select a category and display its websites
function selectCategory(category) {
    // Update current category
    currentCategory = category;
    
    // Update active button
    const categoryButtons = document.querySelectorAll('.category-button');
    categoryButtons.forEach(button => {
        if (button.dataset.category === category) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
    
    // Update panel header
    const panelHeader = document.querySelector('.panel-header h2');
    panelHeader.textContent = settings.language === 'vi' ? 'TRANG WEB' : 'WEBSITES';
    
    // Populate websites
    populateWebsites(category);
}

// Populate website buttons for selected category
function populateWebsites(category) {
    const websitesContainer = document.querySelector('.websites-container');
    
    // Clear any existing buttons
    websitesContainer.innerHTML = '';
    
    // Get websites for this category
    const websites = DATA[category];
    
    if (!websites || websites.length === 0) {
        // Display no websites message
        const noWebsites = document.createElement('div');
        noWebsites.className = 'no-websites';
        noWebsites.textContent = settings.language === 'vi' ? 
            'Không có trang web nào trong danh mục này' : 
            'No websites in this category';
        websitesContainer.appendChild(noWebsites);
        return;
    }
    
    // Create buttons for each website
    websites.forEach(website => {
        const button = document.createElement('button');
        button.className = 'website-button';
        button.textContent = website.name;
        button.dataset.url = website.url;
        button.dataset.name = website.name;
        button.title = `${website.description} (${website.rights})`;
        
        button.addEventListener('click', function() {
            loadWebsite(website.url, website.name);
            
            // Update active button
            document.querySelectorAll('.website-button').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
        });
        
        websitesContainer.appendChild(button);
    });
}

// Load a website in the iframe
function loadWebsite(url, name) {
    currentUrl = url;
    
    // Get the webview container
    const webviewContainer = document.getElementById('webview-container');
    
    // Clear the container
    webviewContainer.innerHTML = '';
    
    // Create iframe
    const iframe = document.createElement('iframe');
    iframe.id = 'webview';
    iframe.src = url;
    iframe.title = name;
    
    // Update status bar
    updateStatus(`${settings.language === 'vi' ? 'Đang tải' : 'Loading'}: ${url}`);
    
    // Handle iframe load events
    iframe.addEventListener('load', function() {
        updateStatus(`${settings.language === 'vi' ? 'Đã tải' : 'Loaded'}: ${url}`);
    });
    
    iframe.addEventListener('error', function() {
        updateStatus(`${settings.language === 'vi' ? 'Lỗi khi tải' : 'Error loading'}: ${url}`);
        
        // Show error message
        webviewContainer.innerHTML = `
            <div class="placeholder-content">
                <div class="placeholder-text">
                    <h2>${settings.language === 'vi' ? 'Không thể tải trang' : 'Could not load page'}</h2>
                    <p>${settings.language === 'vi' ? 'Có lỗi khi tải' : 'Error loading'} ${url}</p>
                </div>
            </div>
        `;
    });
    
    // Add iframe to container
    webviewContainer.appendChild(iframe);
}

// Update status bar text
function updateStatus(text) {
    const statusBar = document.querySelector('.status-bar');
    statusBar.textContent = text;
}

// Open settings modal
function openSettingsModal() {
    const modal = document.getElementById('settings-modal');
    modal.style.display = 'block';
    
    // Set current settings in form
    const languageInputs = document.getElementsByName('language');
    for(let input of languageInputs) {
        if(input.value === settings.language) {
            input.checked = true;
        }
    }
    
    const themeInputs = document.getElementsByName('theme');
    for(let input of themeInputs) {
        if(input.value === settings.theme) {
            input.checked = true;
        }
    }
}

// Open about modal
function openAboutModal() {
    const modal = document.getElementById('about-modal');
    modal.style.display = 'block';
}

// Update settings
function saveSettings() {
    // Get form values
    const languageInputs = document.getElementsByName('language');
    for(let input of languageInputs) {
        if(input.checked) {
            settings.language = input.value;
            break;
        }
    }
    
    const themeInputs = document.getElementsByName('theme');
    for(let input of themeInputs) {
        if(input.checked) {
            settings.theme = input.value;
            break;
        }
    }
    
    // Save to local storage
    localStorage.setItem('interiorHubSettings', JSON.stringify(settings));
    
    // Apply settings
    applySettings();
    
    // Close modal
    document.getElementById('settings-modal').style.display = 'none';
    
    // Refresh UI text based on language
    refreshUIText();
    
    // Reload current category to refresh text
    if (currentCategory) {
        selectCategory(currentCategory);
    }
}

// Load settings from local storage
function loadSettings() {
    const savedSettings = localStorage.getItem('interiorHubSettings');
    if (savedSettings) {
        settings = JSON.parse(savedSettings);
        applySettings();
    }
}

// Apply current settings
function applySettings() {
    // Apply theme
    document.body.className = settings.theme;
    
    // Apply language
    // (This will be handled by refreshUIText)
    refreshUIText();
}

// Refresh UI text based on language
function refreshUIText() {
    // Update static UI elements based on language
    const elements = {
        'about-button': settings.language === 'vi' ? 'Giới thiệu' : 'About',
        'settings-button': settings.language === 'vi' ? 'Cài đặt' : 'Settings',
    };
    
    for (const [id, text] of Object.entries(elements)) {
        const element = document.getElementById(id);
        if (element) {
            element.title = text;
        }
    }
    
    // Update modals
    document.querySelector('#settings-modal .modal-header h2').textContent = 
        settings.language === 'vi' ? 'Cài đặt' : 'Settings';
    
    document.querySelector('#about-modal .modal-header h2').textContent = 
        settings.language === 'vi' ? 'Giới thiệu' : 'About';
    
    document.querySelector('#language-settings h3').textContent = 
        settings.language === 'vi' ? 'Ngôn ngữ' : 'Language';
    
    document.querySelector('#theme-settings h3').textContent = 
        settings.language === 'vi' ? 'Giao diện' : 'Theme';
    
    // Update settings labels
    const languageLabels = {
        'vi-label': settings.language === 'vi' ? 'Tiếng Việt' : 'Vietnamese',
        'en-label': settings.language === 'vi' ? 'Tiếng Anh' : 'English',
    };
    
    for (const [id, text] of Object.entries(languageLabels)) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = text;
        }
    }
    
    const themeLabels = {
        'light-label': settings.language === 'vi' ? 'Sáng' : 'Light',
        'dark-label': settings.language === 'vi' ? 'Tối' : 'Dark',
    };
    
    for (const [id, text] of Object.entries(themeLabels)) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = text;
        }
    }
    
    // Update buttons
    document.querySelector('#settings-form button[type="submit"]').textContent = 
        settings.language === 'vi' ? 'Lưu' : 'Save';
    
    // Update about content
    const aboutContent = document.querySelector('#about-modal .modal-body');
    aboutContent.innerHTML = settings.language === 'vi' 
        ? `
            <h3>Interior Resource Hub</h3>
            <p>Phiên bản: 1.0.0</p>
            <p>Ứng dụng quản lý tài nguyên thiết kế nội thất, giúp tổ chức và truy cập nhanh các trang web hữu ích cho công việc thiết kế 3D và nội thất.</p>
            <p>Tính năng:</p>
            <ul>
                <li>Danh mục trang web được phân loại</li>
                <li>Trình duyệt web tích hợp</li>
                <li>Hỗ trợ đa ngôn ngữ</li>
                <li>Giao diện thân thiện</li>
            </ul>
        `
        : `
            <h3>Interior Resource Hub</h3>
            <p>Version: 1.0.0</p>
            <p>An interior design resource management application that helps organize and quickly access useful websites for 3D and interior design work.</p>
            <p>Features:</p>
            <ul>
                <li>Categorized website directory</li>
                <li>Integrated web browser</li>
                <li>Multilingual support</li>
                <li>User-friendly interface</li>
            </ul>
        `;
    
    // Update manage content text
    const manageLabels = {
        'manage-tab-button': settings.language === 'vi' ? 'Quản lý' : 'Manage',
        'add-category-heading': settings.language === 'vi' ? 'Thêm danh mục mới' : 'Add New Category',
        'new-category-name-label': settings.language === 'vi' ? 'Tên danh mục:' : 'Category Name:',
        'add-category-button': settings.language === 'vi' ? 'Thêm' : 'Add',
        'add-website-heading': settings.language === 'vi' ? 'Thêm trang web mới' : 'Add New Website',
        'new-website-name-label': settings.language === 'vi' ? 'Tên trang web:' : 'Website Name:',
        'new-website-url-label': settings.language === 'vi' ? 'URL:' : 'URL:',
        'new-website-description-label': settings.language === 'vi' ? 'Mô tả:' : 'Description:',
        'new-website-rights-label': settings.language === 'vi' ? 'Quyền sử dụng:' : 'Rights:',
        'new-website-category-label': settings.language === 'vi' ? 'Danh mục:' : 'Category:',
        'add-website-button': settings.language === 'vi' ? 'Thêm' : 'Add',
    };
    
    for (const [id, text] of Object.entries(manageLabels)) {
        const element = document.getElementById(id);
        if (element) {
            if (element.tagName === 'BUTTON') {
                element.textContent = text;
            } else {
                element.innerHTML = text;
            }
        }
    }
    
    // Update login button text
    const loginButton = document.getElementById('login-button');
    if (currentUser) {
        loginButton.title = settings.language === 'vi' ? 'Đăng xuất' : 'Sign out';
    } else {
        loginButton.title = settings.language === 'vi' ? 'Đăng nhập' : 'Sign in';
    }
    
    // Update account modal text
    document.querySelector('#account-modal .modal-header h2').textContent = 
        settings.language === 'vi' ? 'Tài khoản' : 'Account';
} 
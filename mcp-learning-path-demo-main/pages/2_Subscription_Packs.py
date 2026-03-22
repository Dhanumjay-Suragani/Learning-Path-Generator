import streamlit as st

st.set_page_config(page_title="Subscription Packs", page_icon="🛍️", layout="wide")

st.markdown(
    """
    <style>
        .block-container {
            padding-top: 1.2rem;
            padding-bottom: 2rem;
        }
        .top-nav {
            border: 1px solid #ececec;
            border-radius: 14px;
            padding: 0.9rem 1.3rem;
            background: #ffffff;
            margin-bottom: 0.6rem;
        }
        .brand-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            flex-wrap: wrap;
        }
        .brand {
            font-size: 1.85rem;
            font-weight: 800;
            letter-spacing: -0.03rem;
        }
        .brand-accent {
            color: #22c55e;
        }
        .nav-links {
            display: flex;
            gap: 1.6rem;
            font-size: 1.05rem;
            font-weight: 600;
        }
        .nav-links span {
            color: #111827;
        }
        .nav-active {
            background: #69ef5b;
            padding: 0.35rem 0.9rem;
            border-radius: 999px;
        }
        .hero {
            background: #76f164;
            border-radius: 0 0 14px 14px;
            padding: 1.8rem 1rem;
            text-align: center;
            margin-bottom: 1rem;
        }
        .hero h1 {
            margin: 0;
            color: #111827;
            font-size: 2.2rem;
            font-weight: 800;
        }
        .hero p {
            margin: 0.5rem 0 0;
            color: #111827;
            font-size: 1.22rem;
            font-weight: 600;
        }
        .pack-card {
            border: 1px solid #e5e7eb;
            border-radius: 16px;
            overflow: hidden;
            background: #ffffff;
            margin-bottom: 0.65rem;
        }
        .pack-image {
            position: relative;
            height: 150px;
            background-size: cover;
            background-position: center;
        }
        .pill {
            position: absolute;
            top: 10px;
            padding: 0.16rem 0.58rem;
            border-radius: 999px;
            color: #ffffff;
            font-size: 0.76rem;
            font-weight: 700;
        }
        .pill-left {
            left: 10px;
            background: #fb923c;
        }
        .pill-right {
            right: 10px;
            background: #22c55e;
        }
        .pack-body {
            padding: 0.95rem;
        }
        .mini-tags {
            display: flex;
            gap: 0.4rem;
            margin-bottom: 0.35rem;
        }
        .mini-tag {
            border-radius: 999px;
            border: 1px solid #d1d5db;
            color: #6b7280;
            font-size: 0.7rem;
            font-weight: 700;
            padding: 0.1rem 0.5rem;
        }
        .pack-title {
            margin: 0;
            color: #111827;
            font-size: 1.6rem;
            line-height: 1.08;
            letter-spacing: -0.02rem;
            font-weight: 800;
        }
        .pack-description {
            color: #4b5563;
            font-size: 0.94rem;
            margin: 0.36rem 0 0.55rem;
        }
        .item {
            color: #10b981;
            font-size: 0.91rem;
            margin-bottom: 0.2rem;
        }
        .more-items {
            color: #22c55e;
            font-weight: 700;
            font-size: 0.9rem;
            margin: 0.35rem 0 0.55rem;
        }
        .price-row {
            display: flex;
            align-items: baseline;
            gap: 0.55rem;
            margin-top: 0.3rem;
        }
        .price-current {
            color: #111827;
            font-size: 2rem;
            font-weight: 800;
            line-height: 1;
            letter-spacing: -0.03rem;
        }
        .price-old {
            color: #9ca3af;
            text-decoration: line-through;
            font-size: 1rem;
            font-weight: 700;
        }
        .price-unit {
            margin: 0.12rem 0 0;
            color: #6b7280;
            font-size: 0.85rem;
            font-weight: 600;
        }
    </style>
    """,
    unsafe_allow_html=True,
)

st.markdown(
    """
    <div class="top-nav">
        <div class="brand-row">
            <div class="brand">Apna<span class="brand-accent">Dukaan</span></div>
            <div class="nav-links">
                <span>Home</span>
                <span>Stores</span>
                <span class="nav-active">Packs</span>
                <span>Orders</span>
                <span>🛒</span>
                <span>👤</span>
            </div>
        </div>
    </div>
    <div class="hero">
        <h1>Subscription Packs</h1>
        <p>Save up to 25% with our curated grocery bundles.<br/>Customize your pack and get regular deliveries!</p>
    </div>
    """,
    unsafe_allow_html=True,
)

packs = [
    {
        "id": "daily-essentials",
        "name": "Daily Essentials Pack",
        "frequency": "Monthly",
        "category": "Essentials",
        "group": "Grocery",
        "badge": "Popular",
        "save": "Save 300",
        "price": "₹999",
        "old_price": "₹1299",
        "unit": "/monthly",
        "description": "Your everyday grocery needs delivered fresh",
        "items": ["Rice (5kg)", "Dal (2kg)", "Oil (2L)", "Flour (5kg)", "Salt (1kg)"],
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
    },
    {
        "id": "fresh-veggies",
        "name": "Fresh Veggies Weekly",
        "frequency": "Weekly",
        "category": "Vegetables",
        "group": "Farm Fresh",
        "badge": "Popular",
        "save": "Save 100",
        "price": "₹399",
        "old_price": "₹499",
        "unit": "/weekly",
        "description": "Farm-fresh vegetables every week",
        "items": ["Tomatoes (1kg)", "Onions (1kg)", "Potatoes (2kg)", "Carrots (500g)", "Beans (500g)"],
        "image": "https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=1200&q=80",
    },
    {
        "id": "dairy-delight",
        "name": "Dairy Delight",
        "frequency": "Monthly",
        "category": "Dairy",
        "group": "Milk and Paneer",
        "badge": "",
        "save": "Save 150",
        "price": "₹599",
        "old_price": "₹749",
        "unit": "/monthly",
        "description": "Fresh dairy products at your doorstep",
        "items": ["Milk (30L)", "Curd (4kg)", "Paneer (1kg)", "Butter (500g)", "Cheese (400g)"],
        "image": "https://images.unsplash.com/photo-1634141510639-d691d86f47be?auto=format&fit=crop&w=1200&q=80",
    },
    {
        "id": "seasonal-fruits",
        "name": "Seasonal Fruit Box",
        "frequency": "Weekly",
        "category": "Fruits",
        "group": "Seasonal",
        "badge": "",
        "save": "Save 120",
        "price": "₹449",
        "old_price": "₹569",
        "unit": "/weekly",
        "description": "A rotating mix of ripe, seasonal fruits",
        "items": ["Bananas (12)", "Apples (1kg)", "Oranges (1kg)", "Pomegranate (500g)", "Papaya (1pc)"],
        "image": "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=1200&q=80",
    },
]

categories = ["All", "Vegetables", "Grocery", "Dairy", "Fruits"]

filter_col, customize_col = st.columns([5, 1.3], vertical_alignment="bottom")

with filter_col:
    selected_category = st.radio(
        "Category",
        categories,
        horizontal=True,
        label_visibility="collapsed",
    )

with customize_col:
    if st.button("+ Customize", use_container_width=True):
        st.success("Customization flow can be connected to your checkout configuration.")

if selected_category == "All":
    visible_packs = packs
else:
    visible_packs = [pack for pack in packs if pack["category"] == selected_category or pack["group"] == selected_category]

if not visible_packs:
    st.info("No packs are available in this category yet.")
else:
    columns = st.columns(3)
    for idx, pack in enumerate(visible_packs):
        current_col = columns[idx % 3]
        featured_badge = ""
        if pack["badge"]:
            featured_badge = f'<span class="pill pill-left">⭐ {pack["badge"]}</span>'

        top_items = pack["items"][:3]
        remaining = len(pack["items"]) - len(top_items)
        items_markup = "".join([f'<div class="item">✓ {item}</div>' for item in top_items])
        if remaining > 0:
            items_markup += f'<p class="more-items">+{remaining} more items</p>'

        card_markup = f"""
        <div class="pack-card">
            <div class="pack-image" style="background-image: url('{pack["image"]}');">
                {featured_badge}
                <span class="pill pill-right">{pack["save"]}</span>
            </div>
            <div class="pack-body">
                <div class="mini-tags">
                    <span class="mini-tag">{pack["frequency"]}</span>
                    <span class="mini-tag">{pack["category"]}</span>
                </div>
                <p class="pack-title">{pack["name"]}</p>
                <p class="pack-description">{pack["description"]}</p>
                {items_markup}
                <div class="price-row">
                    <span class="price-current">{pack["price"]}</span>
                    <span class="price-old">{pack["old_price"]}</span>
                </div>
                <p class="price-unit">{pack["unit"]}</p>
            </div>
        </div>
        """
        with current_col:
            st.markdown(card_markup, unsafe_allow_html=True)
            if st.button("Subscribe", key=f"subscribe-{pack['id']}", use_container_width=True):
                st.success(f"Added '{pack['name']}' to your subscription queue.")

var ocoindovia = document.querySelectorAll(".ocoindovia");



ocoindovia.forEach(item => {
  item.addEventListener('click', function() {
    // Remove the "active" class from all divs
    ocoindovia.forEach(element => {
      element.classList.remove('current');
    });
    // Add the "active" class to the clicked div
    this.classList.add('current');
  });
});

document.getElementById("carinsurance").addEventListener("click", function() { 
	document.getElementById("refreshpaga").innerHTML = `
<div class="services-details__content">
<img src="images/resource/car-insurance.jpg" alt />
<h3 class="mt-4">Car Insurance</h3>
<p>Motor Insurance made to suit your every need with Al Wathba Insurance. We offer you the selection between Comprehensive & Third-Party Coverage with additional benefits to add extra value to your purchase. We promise you peace of mind when on the road.  </p>
<div class="content mt-40">
<div class="text">
<h3>What's Covered</h3>
<p><strong>&bull; Agency Repair</strong></p>

		<p>Your insured vehicle can undergo repairs at the agency for up to 2 years.</p>

		<p><strong>&bull; Loss or Damage to the Insured Vehicle</strong></p>

		<p>Comprehensive coverage protects your vehicle against loss or damage from accidents.</p>

		<p><strong>&bull; Third Party Property Damage</strong></p>

		<p>Coverage safeguards policyholders from financial liabilities arising due to unintentional damage to a third party property.</p>

		<p><strong>&bull; Third Party Bodily Injury</strong></p>

		<p>Coverage provides protection against financial consequences resulting from injuries caused to individuals for whom the policyholder is deemed responsible.</p>

		<p><strong>&bull; Own Damage Cover up to 10 Years</strong></p>

		<p>Extended coverage provides protection against damages to your vehicle for up to 10 years.</p>

		<p><strong>&bull; Oman Cover Extension (Own Damage only)</strong></p>

		<p>Travel worry-free with our policy extension, providing coverage for your vehicle in Oman.</p>

		<p><strong>&bull; Orange Card cover &ndash; Upon Request:</strong></p>

		<p>Add-on cover available at your request for Third Party damages in Sultanate of Oman.</p>

		<p><strong>&bull; Personal Accident (PA) Cover for Driver and Passengers:</strong></p>

		<p>Optional PA coverage offers financial assistance for medical expenses and compensation in case of accidents, ensuring the well-being of drivers and passengers alike.</p>

		<p><strong>&bull; 24/7 Roadside Assistance</strong></p>

		<p>Ready to assist you while you are on the roads 24 hours a day, 7 days a week.</p>

		<p><strong>&bull; Car Hire Allowance</strong></p>

		<p>Enjoy a car hire allowance for up to 7 to 10 days in the case of a faulty accident.</p>

		<p><strong>&bull; Windscreen Damage</strong></p>

		<p>In the event of breakage to the insured vehicle&rsquo;s windscreen, damages will be restored to new.</p>

		<p><strong>&bull; Fire &amp; Theft Cover</strong></p>

		<p>In the case of a robbery or fire, your vehicle is covered and protected.</p>

		<p><strong>&bull; Ambulance Service</strong></p>

		<p>In the event of an accident, ambulance services will be available as required.</p>
</div>


</div>
</div>

	`;
});

document.getElementById("projectinsurance").addEventListener("click", function() { 
	document.getElementById("refreshpaga").innerHTML = `
<div class="services-details__content">
<img src="images/resource/financial-project-insurance.jpg" alt />
<h3 class="mt-4">Project Finance Insurance</h3>
<p>NNI’s Surety Bond Certificate on Loan Project Finance Insurance protects UAE Financial Lender in case of payment default on a loan granted to an borrower by UAE Finance Company.<p>

<p>Loaning to Special Purpose Vehicles (SPVs) comes with a higher risk because it must repay a loan capital with the cash flow it generates. NNI insures the credit risk for the entire duration of the loan.</p>

Reduce risks associated with SPVs.
The level of non-performing loans is much higher in project finance than in traditional corporate banking. NNI’s Project Finance Insurance mitigates the risk of non-payment by SPVs and lets UAE sponsors invest with confidence in the project.
<h3 class="mt-4">Protect collateral.</h3>

<p>In case of payment default, NNI’s Project Finance Insurance can be claimed and is usually paid out before other collateral can be activated.</p>


<h3 class="mt-4">Minimize loss due to political risk.</h3>

<p>Overseas projects can be associated with unanticipated political risks that can be difficult to manage. NNI’s Project Finance Insurance can minimize the risk of loss from loan payment defaults by SPVs due to a broad range of global scenarios.
  </p>

</div>

	`;
});

document.getElementById("homeinsurance").addEventListener("click", function() { 
	document.getElementById("refreshpaga").innerHTML = `
<div class="services-details__content">
<img src="images/resource/home-insurance.jpg" alt />
<h3 class="mt-4">Home Insurance</h3>
<p>
Welcome to our Home Insurance services, your trusted partner in safeguarding your most valuable asset—your home.<p>
<p>
Home Insurance provides you with the security and peace of mind you need to protect your residence and everything within it.
  </p>
<div class="content mt-40">
<div class="text">
<h3>What's Covered</h3>


<ul>
			<li><strong>Alternative Accommodation</strong>
				<br>Covers the cost of temporary accommodation, up to AED 80,000, if your home becomes uninhabitable due to covered incidents.</li>
			<li><strong>Food in Freezers and Refrigerators due to breakdown</strong>
				<br>Provides coverage of up to AED 2,500 for spoiled food in case of breakdowns in freezers and refrigerators.</li>
			<li><strong>Replacement of Key Locks</strong>
				<br>Does not cover the replacement of key locks.</li>
			<li><strong>Tenants Improvements</strong>
				<br>Includes coverage for improvements made by tenants, up to 10% of the insured amount, to protect their investments in the property.</li>
		</ul>
<h3>Add On’s</h3>
<ul>
			<li><strong>Occupational Death</strong>
				<br>Provides 24 months of the worker&rsquo;s last remuneration before death, with a minimum of AED 18,000/- and a maximum of AED 35,000/-</li>
			<li><strong>Permanent Disability</strong>
				<br>Percentage of Death benefits as per the specified scale.</li>
			<li><strong>Loss of Wages (cash allowance)</strong>
				<br>Covers up to 100% of the full salary for the first six months.</li>
			<li><strong>Medical Expenses</strong>
				<br>In addition to the basic Workers&rsquo; Compensation coverage, the employer can protect themselves against claims made by employees under Common/Sharia Law, up to a selected limit of indemnity. This limit typically ranges from AED 500,000 AED to AED 1 million and is provided through Employers&rsquo; Liability Insurance.</li>
		</ul>


<h3>Key Features</h3>
	<ul>
			<li><strong>Online Services Availability</strong>
				<br>Enjoy the convenience of buying, managing, or renewing your policy from the comfort of your home or office. Our online technology makes interaction with us easier.</li>
			<li><strong>Best Premium Rates and Terms</strong>
				<br>We provide competitive premium rates and favorable terms to ensure you get the best value for your insurance coverage.z</li>
		</ul>

</div>


</div>
</div>
`;
});

document.getElementById("yachtinsurance").addEventListener("click", function() { 
	document.getElementById("refreshpaga").innerHTML = `
<div class="services-details__content">
<img src="images/resource/yacht-Insurance.jpg" alt />
<h3 class="mt-4">Yacht Insurance</h3>
<p>Motor Insurance made to suit your every need with Al Wathba Insurance. We offer you the selection between Comprehensive & Third-Party Coverage with additional benefits to add extra value to your purchase. We promise you peace of mind when on the road.  </p>
<div class="content mt-40">
<div class="text">
<h3>What's Covered</h3>

<ul>
			<li><strong>Theft Cover</strong>
				<br>We offer comprehensive protection to secure your watercraft against any potential theft at all times.</li>
			<li><strong>Personal Accident Cover</strong>
				<br>We offer comprehensive protection to secure your watercraft against any potential theft at all times.</li>
			<li><strong>Loss or Damage Cover</strong>
				<br>Receive extensive coverage against fire, theft, malicious damage, and vandalism, ensuring the security of your insured watercraft under various circumstances.</li>
			<li><strong>Emergency Assistance</strong>
				<br>&nbsp;Our dedicated team is available 24/7 to provide immediate assistance in case of emergencies on the water, guaranteeing your safety and well-being.</li>
		</ul>


<h3>Highlights</h3>
<ul>
			<li><strong>Smooth Claims Processing</strong>
				<br>Our efficient and professional team handles your claims promptly, ensuring a smooth and stress-free process.</li>
			<li><strong>Efficient Underwriting:</strong>
				<br>Benefit from the swift processing by our team of professional underwriters, which provides you with immediate coverage.</li>
		</ul>
<h3>Benefits</h3>
<ul>
			<li><strong>Online services availability</strong>
				<br>&nbsp;We understand the convenience of managing or renewing your policy from the comfort of your home or office. Our advanced online technology makes interactions with us easier and more accessible.</li>
			<li><strong>Best premium rates and terms</strong>
				<br>We offer the most competitive premium rates and comprehensive products, providing you with the necessary coverage at an affordable price.</li>
</div>
</div>
</div>
`;
});


document.getElementById("healthinsurance").addEventListener("click", function() { 
	document.getElementById("refreshpaga").innerHTML = `
<div class="services-details__content">
<img src="images/resource/health-insurance.jpg" alt />
<h3 class="mt-4">What Is Health Insurance?
</h3>
<p>Health Insurance Association of America defines health insurance as “coverage that provides for the payments of benefits as a result of sickness or injury” as well as “insurance for losses from accident, medical expense, disability, or accidental death and dismemberment.” It is broken up into two main categories: Fee-for-Service and Managed Cared. Although both plans are not entirely like the other, they both can cover areas such as medical, surgical, and hospital expenses, as well as prescription drug and dental coverage. </p>
<div class="content mt-40">
<div class="text">
<h3>How Does it Benefit Me?</h3>
<p>As people, we are susceptible to accidents and illness whether we like it or not. Although it would be nice to plan for such instances, that is not always possible. When or if that moment comes and you find yourself without health insurance, you might be facing serious consequences on top of your pre-existing issues. However, with health insurance to help you, you don’t have to have any more added stress and can instead feel relaxed knowing you will be taken care of.</p>
<h3>What's Covered</h3>
<ul>
			<li>Long-Term Care </li>
			<li>Vision Coverage</li>
			<li>Dental Coverage</li>
			<li>Medical Expenses</li>
			<li>Surgical Expenses</li>
			<li>Hospital Expenses</li>
		</ul>
</div>


</div>
</div>
`;
});


const questions = [
    { qName: 'Client Name', type: 'Text' },
    {
        qName: 'Industry', type: 'Select',
        options: ['Communications', 'Funeral Services', 'Agriculture', 'Business & Finance',
            'Chemicals', 'Commercial equipment', 'Advertising', 'Construction',
            'Hardware & Supplies', 'Engineering', 'Household', 'Manufacturing', 'Courier',
            'Jewelers', 'Fashion', 'Education', 'Electronics', 'Energy', 'Science & Technology',
            'Entertainment', 'Food & Beverage', 'Healthcare', 'Hospitality & Tourism', 'Transportation', 'Insurance', 'Restaurant', 'Other']
    },
    { qName: 'Client Size', type: 'Select', options: ['Unspecified', 'Micro', 'Small', 'Medium', 'Large', 'Corporate'] },
    { qName: 'Annual Revenue', type: 'Text' },
    { qName: 'Years in Operation', type: 'Text' },
    { qName: 'Product/Service', type: 'Select', options: ['Convenience Good', 'Specialty Goods', 'Pure Service', 'Major Service', 'Capital Plant and Equipment', 'Accessories', 'Materials and Components'] },
    { qName: 'Budget', type: 'Text' },
    { qName: 'Period of Campaign/days', type: 'Text' },
    { qName: 'Consumer Type', type: 'Select', options: ['Business', 'Personal'] },
    {
        qName: 'Target Industry', type: 'Select',
        options: ['Communications', 'Funeral Services', 'Agriculture', 'Business & Finance',
            'Chemicals', 'Commercial equipment', 'Advertising', 'Construction',
            'Hardware & Supplies', 'Engineering', 'Household', 'Manufacturing', 'Courier',
            'Jewelers', 'Fashion', 'Education', 'Electronics', 'Energy', 'Science & Technology',
            'Entertainment', 'Food & Beverage', 'Healthcare', 'Hospitality & Tourism', 'Transportation', 'Insurance', 'Restaurant', 'Other']
    },
    { qName: 'Business Size', type: 'Select', options: ['Unspecified', 'Micro', 'Small', 'Medium', 'Large', 'Corporate'] },
    
    { qName: 'Gender Preference', type: 'Select', options: ['None', 'Male', 'Female'] },
    { qName: 'Geographic Preference', type: 'Select', options: ['Urban', 'Suburban', 'Rural', 'Islandwide'] },
    {
        qName: 'Life Stage Preference', type: 'Select', options: ['Unspecified', 'New nesters, children under 6',
            'Full nest, youngest over 6', 'Full nest, children over 16', 'Newly Independent', 'GenZ', 'Millenials', 'Single Independent', 'New Parents',
            'Post-Parenting', 'Retirees', 'Young Families', 'Older Families', 'General Population']
    }
];

export default questions;
// controller/formController.js

import Donator from '../models/Donator.js';
import Form from '../models/Form.js';
import ContributionType from '../models/ContributionType.js';

export const createForm = async (req, res) => {
  try {
    //
    // 1) Create Donator
    //
    const newDonator = await Donator.create({
      // Example: merge first & last name into 'name'
      name: `${req.body.first_name} ${req.body.last_name}`.trim(),
      age: req.body.age,
      sex: req.body.sex,
      email: req.body.email,
      organization: req.body.organization,
      province: req.body.province,
      city: req.body.city_municipality,
      barangay: req.body.barangay,
      street: req.body.street
      // If you want to store phone, add a column in Donator, then include phone here
    });

    //
    // 2) Create Form
    //
    const newForm = await Form.create({
      donator_id: newDonator.id,
      artifact_name: req.body.artifact_name,
      description: req.body.description,
      acquired: req.body.acquired,
      additional_info: req.body.additional_info,
      narrative: req.body.narrative,
      images: req.body.images,            // or handle file upload differently
      documents: req.body.documents,
      related_images: req.body.related_images,
      donation_date: new Date(),         // or parse from req.body
      accession_status: 'pending',       // example default
      user_id: 1                         // or get from req.body / auth
    });

    //
    // 3) Optionally Create a ContributionType
    //
    // If the user chose a 'lending' form, create a ContributionType record for it.
    if (req.body.formType === 'lending') {
      const newContribution = await ContributionType.create({
        duration_period: req.body.durationPeriod,
        remarks: req.body.remarks,
        condition: req.body.condition,
        status: 'accepted',       // example
        transfer_status: 'on_progress',
        accession_type: 'lending'
      });

      // Link the new ContributionType to our Form
      await newForm.update({ contribution_id: newContribution.id });
    } else {
      // For a simple donation, create a default ContributionType record
      const newContribution = await ContributionType.create({
        accession_type: 'donation',
        status: 'accepted',
        transfer_status: 'acquired'
      });

      // Link the record to the Form
      await newForm.update({ contribution_id: newContribution.id });
    }

    return res.status(201).json({
      message: 'Form created successfully',
      formId: newForm.id,
      donatorId: newDonator.id
    });
  } catch (error) {
    console.error('Error creating form:', error);
    return res.status(500).json({
      message: 'Failed to create form',
      error: error.message
    });
  }
};

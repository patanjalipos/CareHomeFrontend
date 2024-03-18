import { Component, OnInit } from '@angular/core';
import { AppComponentBase } from 'src/app/app-component-base';
import { ConstantsService } from 'src/app/ui/service/constants.service';
import { MasterService } from 'src/app/ui/service/master.service';
import { UtilityService } from 'src/app/utility/utility.service';

@Component({
  selector: 'app-pre-admission-assessment-forms',
  templateUrl: './pre-admission-assessment-forms.component.html',
  styleUrls: ['./pre-admission-assessment-forms.component.scss']
})
export class PreAdmissionAssessmentFormsComponent extends AppComponentBase implements OnInit {

  PreAdmForm: any[] = [];

  personCapacityOptions: string[] =[
    'The Resisdent is assumed to have capacity to consent to care and accommodation',
    'The Resident does not have capacity to consent to care and accommodation',
    'The Resident has a welfare Power of Attorney or welfare Guardian who is making the decision with regards to thier care and accommodation',
    'The Resident is being moved under Adults with Inactivity Act Section 13ZA',
    'The Resident does not have mental capacity however has been consulted in relation to their future care accommation and their response has been taken into account'
  ];

  professionalDocObtainedOptions: string[] =[
    'No professional documentation has been obtained for the resident',
    'The Resident has an AWI already completed and a copy has been obtained',
    'The Resident has an AWI Already completed but a copy has not been obtained',
    'The Resident has appointed a power of Attorney and a copy has been obtained',
    'The Resident has appointed a power of Attorney and a copy has not been obtained',
    'The Resident has legal Guardian and a copy has been obtained',
    'The Resident has legal Guardian and a copy has not been obtained',
    'The Resident is being Admitted under a community treatment order and a copy has been obtained'
  ];

  residentMovingOptions: string[]=[
    'Home',
    'Another Care Home',
    'Hospital',
    'Other'
  ]

  paymentOptionsn: string[]=[
    'Private (Financial Assessment from must be completed)',
    'LA / CCG',
    '3rd Party Contribution /Top Up'
  ]

  peronsCurrentAbilities : string[]=[
    'The Resident is able bodied and continues to use these abilities in their everyday life',
    'The resident is able to complete simple physical tasks and should be encouraged and enabled to continue to develop these further',
    'The resident has rehabilitation potential and as such should have a rehab program in place to promote abilities',
    'The resident has limited physical abilities but has capacity to be as involved in their lives as possible',
    'The resident has limited physical abilities and does not have mental capacity to make informed choices and/or decisions however will be enabled to be included in every aspect of their lives',
    'Other'
  ]

  advancedCarePlanningOptions : string[]=[

  ]
  
  medicalHistoryConditionOptions:string[]=[
    'The resident has a past medical history of unspecified Dementia',
    'The resident has a diagnosis of Vascular Dementia  Vascular dementia is caused by problems in the blood supply to the brain due to damaged or diseased blood vessels, a stroke, or mini strokes called transient ischaemic attacks (TIAS).',
    'The resident has a diagnosis of Frontotemporal dementia (FTD) is an umbrella term for a group of dementias that mainly affect the frontal and temporal lobes of the brain, which are responsible for personality, behaviour, language and speech.',
    'The resident has a diagnosis of Alzheimers Disease. It is caused by a build-up of proteins in the brain which affect how the brain cells transmit messages. As time passes, more and more brain cells are damaged, leading to worsening symptoms.',
    'The resident has a diagnosis of Huntington\'s disease',
    'Huntington\'s Disease is primarily thought of as a condition of motor function - that is, it affects the person\'s movement. But there can be damage to the brain which can develop into dementia.',
    'The resident has a diagnosis of Lewy body dementia',
    'Dementia with Lewy bodies - changes in thinking, visual perception (cognitive symptoms) and sleep may be experienced first and difficulty with movement (Parkinsonian symptoms) - occur at the same time or later',
    'The resident has a diagnosis of Parkinson\'s',
    'Parkinson\'s is a condition in which a part of the brain called the substantia nigra loses nerve cells. This loss of nerve cells results in a reduction of a substance called dopamine which is important for the regulation of movement of the body.',
    'The resident has a diagnosis of Diabetes Type I - meaning the residents body is unable to make any of the hormone called insulin.',
    'The resident has a diagnosis of Cardiovascular disease- Cardiovascular disease (CVD) is a general term for conditions affecting the heart or blood vessels.',
    'The resident has a diagnosis of Diabetes Type II - It is high blood sugar levels due to your body not making enough of a hormone called insulin, or what it makes not working properly.',
    'The resident has a PMH of Myocardial infarction (Heart Attack)',
    'The resident has a PMH of a Cardiovascular attach (Stroke) - Cerebrovascular accident (CVA) is the medical term for a stroke. A stroke is when blood flow to a part of your brain is stopped either by a blockage or the rupture of a blood vessel.',
    'The resident has a PMH of Transient Ischemic Attacks (TIA/Mini strokes) - A transient ischaemic attack (TIA) or "mini stroke" is caused by a temporary disruption in the blood supply to part of the brain',
    'The resident has a PMH depression', 
    'The resident has a PMH of Anxiety',
    'The resident has a confirmed diagnosis of Schizophrenia - Schizophrenia is a complicated mental health problem related to psychosis.',
    'The resident has a diagnosis of Schizophrenia which is a complicated mental health problem related to psychosis',
    'The resident has a PMH of Delirium',
    'The resident has a PMH of Psychosis',
    'The resident has a diagnosis of a underlying learning disability',
    'The resident has a diagnosis of Bipolar disorder - Bipolar disorder is a mental health problem that mainly affects the residents ood.',
    'The reisdent has been diagnosed with a Borderline Personality Disorder',
    'The resident diagnosed with a personality disorder had difficulties with how they think and feel about themselves and other people. And these difficulties made it hard to cope day to day.',
    'The resident has a diagnosis of Obsessive compulsive disorder - Obsessive-compulsive disorder (OCD) is a mental health problem. It has two main parts that are connected, obsessions and compulsions.',
    'The resident has a diagnosis of Post Traumatic Stress Disorder - Post-traumatic stress disorder (PTSD) is a mental health problem you may develop after experiencing traumatic events.',
    'The resident has a history of self harm',
    'The resident has a history of stress and distress requiring positive behaviour support from those around them.',
    'The resident has a history of Falls.',
    'The resident has a history of recurring Urinary Tract Infections',
    'The resident has a history of urinary retention.',
    'The resident has a history of Pressure Ulcers.',
    'The resident has a history of skin tears.',
    'The resident has a history of blood clots.',
    'The resident has a history of COVID.',
    'The resident has a history of urinary retention.',
    'The resident has a history of sight impairment.',
    'The resident has a history of hearing impairment.',
    'The resident has a history of taste impairment.',
    'The resident has a history of swallowing impairment.',
    'The resident has a history of Prostate Cancer.',
    'The resident has a history of Breast Cancer',
    'The resident has a diagnosis of Chronic Obstructive Pulmonary Disease (COPD)',
    'Chronic obstructive pulmonary disease (COPD) is where air cannot get out of the lungs easily (the airflow is obstructed).',
    'The resident has a history of Bowel Cancer',
    'The resident has a history of Arthritis - Arthritis is a common condition that causes pain and inflammation in a joint.',
    'The resident has a history of Rheumatoid Arthritis.',
    'Rheumatoid arthritis is an autoimmune disease. This means your immune system (which usually fights infection) attacks the cells that line your joints by mistake, making the joints swollen, stiff and painful.',
    'Other'
  ]

  connectingAndCommunicatingOptions: string[]=[

  ]

  personalSafetyOptions: string[]=[

  ]

  residentExpAnyMHConditionsOptions: string[]=[

  ]

  speechSightHearingOptions: string[]=[

  ]

  fallsAndMobilityOptions: string[]=[

  ]

  painStatusOptions: string[]=[

  ]

  skinAssessmentOptions: string[]=[

  ]

  eatingDrinkingAssessmentOptions:string[]=[

  ]

  promotionOfContinenceOptions: string[]=[

  ]

  feelingFreshAndCleanOptions: string[]=[

  ]

  sleepingAndRestiingOptions: string[]=[

  ]

  expressingSexualityOptions: string[]=[

  ]

  EpilepsySeizureManagementOptions: string[]=[

  ]

  infectionStatusOptions: string[]=[

  ]

  medicationOption: string[]=[

  ]

  firstAidEpilepticSeizureOptions: string[]=[
    'Assess - Assess the situcation - are they in danger of injurying themselves. Remove nearby objects that could cause harm',
    'Cushion - Cushion their head to protect from head injury',
    'Time - Check the time - if seizure lasts longer than 5 minutes you should administered rescue meds or escalate to ambulance services',
    'Identity - Refer to Epilepsy support plan for possible further interventions',
    'Over-Once the jerking has stopped, put them on their side. Stay with them and reassure them as they come round',
    'Never - Never restrain the resident, put something in their mouth or try to give them food and drink',
    'Other'
  ]

  constructor(private _ConstantServices: ConstantsService,
    private _MasterServices:MasterService,
    private _UtilityService: UtilityService,
  ) 
  {
    super();
    this._ConstantServices.ActiveMenuName = "Form Master";
  }

  ngOnInit(): void {
  }

}

'use strict';

angular.module('evalu8Demo')
		
.service('CustomQuestionBanksService', 
					['$http', '$rootScope', '$location', '$cookieStore', 
					 function($http, $rootScope, $location, $cookieStore) {									
			 
			 var MultipleChoice_Template = '<?xml version="1.0" encoding="utf-8"?><assessmentItem xmlns="http://www.imsglobal.org/xsd/imsqti_v2p1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqti_v2p1 http://www.imsglobal.org/xsd/qti/qtiv2p1/imsqti_v2p1.xsd" title="Pre 1.1.2" identifier="QUESTION-1000001217597854" label="Pre 1.1.2" toolName="pegasus" toolVersion="5.152.49.2" adaptive="false" timeDependent="false"><responseDeclaration identifier="RESPONSE" cardinality="single" baseType="identifier"/><outcomeDeclaration identifier="FEEDBACK" cardinality="single" baseType="identifier"/><outcomeDeclaration identifier="ITEMSCORE" cardinality="single" baseType="float"/><outcomeDeclaration identifier="SCORE" cardinality="single" baseType="float" normalMaximum="1.00"><defaultValue><value>0</value></defaultValue></outcomeDeclaration><outcomeDeclaration identifier="MAXSCORE" cardinality="single" baseType="float"><defaultValue><value>1.00</value></defaultValue></outcomeDeclaration><itemBody><p></p><choiceInteraction shuffle="true" orientation="Vertical" responseIdentifier="RESPONSE" maxChoices="1" minChoices="1"><simpleChoice identifier="RESPONSE_1" fixed="false"></simpleChoice><simpleChoice identifier="RESPONSE_2" fixed="false"></simpleChoice><simpleChoice identifier="RESPONSE_3" fixed="false"></simpleChoice><simpleChoice identifier="RESPONSE_4" fixed="false"></simpleChoice></choiceInteraction></itemBody><responseProcessing><responseCondition><responseIf><match><variable identifier="RESPONSE"/><baseValue baseType="identifier">RESPONSE_1</baseValue></match><setOutcomeValue identifier="SCORE"><baseValue baseType="float">1</baseValue></setOutcomeValue><setOutcomeValue identifier="FEEDBACK"><baseValue baseType="identifier">FEEDBACK_1</baseValue></setOutcomeValue></responseIf><responseElseIf><match><variable identifier="RESPONSE"/><baseValue baseType="identifier">RESPONSE_2</baseValue></match><setOutcomeValue identifier="SCORE"><baseValue baseType="float">0</baseValue></setOutcomeValue><setOutcomeValue identifier="FEEDBACK"><baseValue baseType="identifier">FEEDBACK_2</baseValue></setOutcomeValue></responseElseIf><responseElseIf><match><variable identifier="RESPONSE"/><baseValue baseType="identifier">RESPONSE_3</baseValue></match><setOutcomeValue identifier="SCORE"><baseValue baseType="float">0</baseValue></setOutcomeValue><setOutcomeValue identifier="FEEDBACK"><baseValue baseType="identifier">FEEDBACK_3</baseValue></setOutcomeValue></responseElseIf><responseElseIf><match><variable identifier="RESPONSE"/><baseValue baseType="identifier">RESPONSE_4</baseValue></match><setOutcomeValue identifier="SCORE"><baseValue baseType="float">0</baseValue></setOutcomeValue><setOutcomeValue identifier="FEEDBACK"><baseValue baseType="identifier">FEEDBACK_4</baseValue></setOutcomeValue></responseElseIf></responseCondition></responseProcessing><modalFeedback identifier="FEEDBACK_1" outcomeIdentifier="FEEDBACK" showHide="show"><div>Psychology: The Scientific Methodology, p. 27</div></modalFeedback><modalFeedback identifier="FEEDBACK_2" outcomeIdentifier="FEEDBACK" showHide="show"><div>Psychology: The Scientific Methodology, p. 27</div></modalFeedback><modalFeedback identifier="FEEDBACK_3" outcomeIdentifier="FEEDBACK" showHide="show"><div>Psychology: The Scientific Methodology, p. 27</div></modalFeedback><modalFeedback identifier="FEEDBACK_4" outcomeIdentifier="FEEDBACK" showHide="show"><div>Psychology: The Scientific Methodology, p. 27</div></modalFeedback></assessmentItem>';
			 var MultipleResponse_Template = '<?xml version="1.0" encoding="utf-8"?><assessmentItem xmlns="http://www.imsglobal.org/xsd/imsqti_v2p1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqti_v2p1 http://www.imsglobal.org/xsd/qti/qtiv2p1/imsqti_v2p1.xsd" title="Mutliple_Response_Question1" identifier="QUESTION-1334052740" label="Mutliple_Response_Question1" toolName="pegasus" toolVersion="5.152.49.2" adaptive="false" timeDependent="false"><responseDeclaration identifier="RESPONSE" cardinality="multiple" baseType="identifier"><mapping defaultValue="0"><mapEntry mapKey="RESPONSE_1" mappedValue="1" /><mapEntry mapKey="RESPONSE_2" mappedValue="0" /><mapEntry mapKey="RESPONSE_3" mappedValue="0" /><mapEntry mapKey="RESPONSE_4" mappedValue="0" /></mapping></responseDeclaration><outcomeDeclaration identifier="FEEDBACK-1" cardinality="single" baseType="identifier" /><outcomeDeclaration identifier="FEEDBACK-2" cardinality="single" baseType="identifier" /><outcomeDeclaration identifier="FEEDBACK-3" cardinality="single" baseType="identifier" /><outcomeDeclaration identifier="FEEDBACK-4" cardinality="single" baseType="identifier" /><outcomeDeclaration identifier="ITEMSCORE" cardinality="single" baseType="float" /><outcomeDeclaration identifier="SCORE" cardinality="single" baseType="float" normalMaximum="2"><defaultValue><value>0</value></defaultValue></outcomeDeclaration><outcomeDeclaration identifier="MAXSCORE" cardinality="single" baseType="float"><defaultValue><value>2</value></defaultValue></outcomeDeclaration><itemBody><p></p><choiceInteraction shuffle="true" responseIdentifier="RESPONSE" orientation="Vertical" maxChoices="2" minChoices="1"><simpleChoice identifier="RESPONSE_1" fixed="false"></simpleChoice><simpleChoice identifier="RESPONSE_2" fixed="false"></simpleChoice><simpleChoice identifier="RESPONSE_3" fixed="false"></simpleChoice><simpleChoice identifier="RESPONSE_4" fixed="false"></simpleChoice></choiceInteraction></itemBody><responseProcessing><responseCondition><responseIf><isNull><variable identifier="RESPONSE" /></isNull><setOutcomeValue identifier="SCORE"><baseValue baseType="float">0.0</baseValue></setOutcomeValue></responseIf><responseElse><setOutcomeValue identifier="SCORE"><mapResponse identifier="RESPONSE" /></setOutcomeValue><responseCondition><responseIf><member><baseValue baseType="identifier">RESPONSE_1</baseValue><variable identifier="RESPONSE" /></member><setOutcomeValue identifier="FEEDBACK-1"><baseValue baseType="identifier">FEEDBACK_1</baseValue></setOutcomeValue></responseIf></responseCondition><responseCondition><responseIf><member><baseValue baseType="identifier">RESPONSE_2</baseValue><variable identifier="RESPONSE" /></member><setOutcomeValue identifier="FEEDBACK-2"><baseValue baseType="identifier">FEEDBACK_2</baseValue></setOutcomeValue></responseIf></responseCondition><responseCondition><responseIf><member><baseValue baseType="identifier">RESPONSE_3</baseValue><variable identifier="RESPONSE" /></member><setOutcomeValue identifier="FEEDBACK-3"><baseValue baseType="identifier">FEEDBACK_3</baseValue></setOutcomeValue></responseIf></responseCondition><responseCondition><responseIf><member><baseValue baseType="identifier">RESPONSE_4</baseValue><variable identifier="RESPONSE" /></member><setOutcomeValue identifier="FEEDBACK-4"><baseValue baseType="identifier">FEEDBACK_4</baseValue></setOutcomeValue></responseIf></responseCondition></responseElse></responseCondition></responseProcessing></assessmentItem>';
			 var TrueFalse_Template = '<?xml version="1.0" encoding="utf-8"?><assessmentItem xmlns="http://www.imsglobal.org/xsd/imsqti_v2p1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqti_v2p1 http://www.imsglobal.org/xsd/qti/qtiv2p1/imsqti_v2p1.xsd" title="True/False" identifier="QUESTION-1334052738" label="True/False" toolName="pegasus" toolVersion="5.152.49.2" adaptive="false" timeDependent="false"><responseDeclaration identifier="RESPONSE" cardinality="single" baseType="identifier" /><outcomeDeclaration identifier="FEEDBACK" cardinality="single" baseType="identifier" /><outcomeDeclaration identifier="ITEMSCORE" cardinality="single" baseType="float" /><outcomeDeclaration identifier="SCORE" cardinality="single" baseType="float" normalMaximum="1"><defaultValue><value>0</value></defaultValue></outcomeDeclaration><outcomeDeclaration identifier="MAXSCORE" cardinality="single" baseType="float"><defaultValue><value>1</value></defaultValue></outcomeDeclaration><itemBody><p></p><choiceInteraction shuffle="false" orientation="Vertical" responseIdentifier="RESPONSE" maxChoices="1" minChoices="1"><simpleChoice identifier="RESPONSE_1" fixed="false">True</simpleChoice><simpleChoice identifier="RESPONSE_2" fixed="false">False</simpleChoice></choiceInteraction></itemBody><responseProcessing><responseCondition><responseIf><match><variable identifier="RESPONSE" /><baseValue baseType="identifier">RESPONSE_1</baseValue></match><setOutcomeValue identifier="SCORE"><baseValue baseType="float">1</baseValue></setOutcomeValue><setOutcomeValue identifier="FEEDBACK"><baseValue baseType="identifier">FEEDBACK_1</baseValue></setOutcomeValue></responseIf><responseElseIf><match><variable identifier="RESPONSE" /><baseValue baseType="identifier">RESPONSE_2</baseValue></match><setOutcomeValue identifier="SCORE"><baseValue baseType="float">0</baseValue></setOutcomeValue><setOutcomeValue identifier="FEEDBACK"><baseValue baseType="identifier">FEEDBACK_2</baseValue></setOutcomeValue></responseElseIf></responseCondition></responseProcessing></assessmentItem>';
			 var MatchFollowing_Template='<?xml version="1.0" encoding="utf-8"?> <assessmentItem xmlns="http://www.imsglobal.org/xsd/imsqti_v2p1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqti_v2p1 http://www.imsglobal.org/xsd/qti/qtiv2p1/imsqti_v2p1.xsd" title="Matching_Question2" identifier="QUESTION-1333938358" label="Matching_Question2" toolName="pegasus" toolVersion="5.152.49.2" adaptive="false" timeDependent="false"> <responseDeclaration identifier="RESPONSE_1" cardinality="single" baseType="identifier"><mapping defaultValue="0"><mapEntry mapKey="RESP_1" mappedValue="1" /></mapping></responseDeclaration> <responseDeclaration identifier="RESPONSE_2" cardinality="single" baseType="identifier"><mapping defaultValue="0"><mapEntry mapKey="RESP_2" mappedValue="1" /></mapping></responseDeclaration><responseDeclaration identifier="RESPONSE_3" cardinality="single" baseType="identifier"><mapping defaultValue="0"><mapEntry mapKey="RESP_3" mappedValue="1" /> </mapping></responseDeclaration><responseDeclaration identifier="RESPONSE_4" cardinality="single" baseType="identifier"><mapping defaultValue="0"><mapEntry mapKey="RESP_4" mappedValue="1" /></mapping></responseDeclaration><outcomeDeclaration identifier="FEEDBACK-1" cardinality="single" baseType="identifier" /><outcomeDeclaration identifier="FEEDBACK-2" cardinality="single" baseType="identifier" /><outcomeDeclaration identifier="FEEDBACK-3" cardinality="single" baseType="identifier" /><outcomeDeclaration identifier="FEEDBACK-4" cardinality="single" baseType="identifier" /><outcomeDeclaration identifier="ITEMSCORE" cardinality="single" baseType="float" /><outcomeDeclaration identifier="SCORE" cardinality="single" baseType="float" normalMaximum="4"><defaultValue><value>0</value></defaultValue></outcomeDeclaration><outcomeDeclaration identifier="MAXSCORE" cardinality="single" baseType="float"><defaultValue><value>4</value></defaultValue></outcomeDeclaration><itemBody><p></p><blockquote><p> <inlineChoiceInteraction responseIdentifier="RESPONSE_1" shuffle="true"><inlineChoice identifier="RESP_1"></inlineChoice><inlineChoice identifier="RESP_2"></inlineChoice><inlineChoice identifier="RESP_3"></inlineChoice><inlineChoice identifier="RESP_4"></inlineChoice></inlineChoiceInteraction></p> </blockquote><blockquote> <p><inlineChoiceInteraction responseIdentifier="RESPONSE_2" shuffle="true"> <inlineChoice identifier="RESP_1"></inlineChoice> <inlineChoice identifier="RESP_2"></inlineChoice><inlineChoice identifier="RESP_3"></inlineChoice><inlineChoice identifier="RESP_4"></inlineChoice></inlineChoiceInteraction></p></blockquote><blockquote><p> <inlineChoiceInteraction responseIdentifier="RESPONSE_3" shuffle="true"><inlineChoice identifier="RESP_1"></inlineChoice>                     <inlineChoice identifier="RESP_2"></inlineChoice>                     <inlineChoice identifier="RESP_3"></inlineChoice>                     <inlineChoice identifier="RESP_4"></inlineChoice>                 </inlineChoiceInteraction>             </p>         </blockquote>         <blockquote>             <p>                          <inlineChoiceInteraction responseIdentifier="RESPONSE_4" shuffle="true">                     <inlineChoice identifier="RESP_1"></inlineChoice>                     <inlineChoice identifier="RESP_2"></inlineChoice>                     <inlineChoice identifier="RESP_3"></inlineChoice>  <inlineChoice identifier="RESP_4"></inlineChoice></inlineChoiceInteraction>             </p>         </blockquote>     </itemBody>     <responseProcessing>         <responseCondition>             <responseIf>                 <isNull>                     <variable identifier="RESPONSE_1" />                 </isNull>                 <setOutcomeValue identifier="SCORE">                     <mapResponse identifier="RESPONSE_1" />                 </setOutcomeValue>             </responseIf>             <responseElse>                 <setOutcomeValue identifier="ITEMSCORE">                     <mapResponse identifier="RESPONSE_1" />                 </setOutcomeValue>                 <setOutcomeValue identifier="SCORE">                     <mapResponse identifier="RESPONSE_1" />                 </setOutcomeValue>                 <responseCondition>                     <responseIf>                         <gt>                             <variable identifier="ITEMSCORE" />                             <baseValue baseType="float">0</baseValue>                         </gt>                         <setOutcomeValue identifier="FEEDBACK-1">                             <baseValue baseType="identifier">FEEDBACK-0</baseValue>                         </setOutcomeValue>                     </responseIf>                     <responseElse>                         <setOutcomeValue identifier="FEEDBACK-1">                             <baseValue baseType="identifier">FEEDBACK-1</baseValue>                         </setOutcomeValue>                     </responseElse>                 </responseCondition>             </responseElse>         </responseCondition>         <responseCondition>             <responseIf>                 <isNull>                     <variable identifier="RESPONSE_2" />                 </isNull>                 <setOutcomeValue identifier="SCORE">                     <sum>                         <variable identifier="SCORE" />                         <mapResponse identifier="RESPONSE_2" />                     </sum>                 </setOutcomeValue>             </responseIf>             <responseElse>                 <setOutcomeValue identifier="ITEMSCORE">                     <mapResponse identifier="RESPONSE_2" />                 </setOutcomeValue>                 <setOutcomeValue identifier="SCORE">                     <sum>                         <variable identifier="SCORE" />                         <mapResponse identifier="RESPONSE_2" />                     </sum>                 </setOutcomeValue>                 <responseCondition>                     <responseIf>                         <gt>                             <variable identifier="ITEMSCORE" />                             <baseValue baseType="float">0</baseValue>                         </gt>                         <setOutcomeValue identifier="FEEDBACK-2">                             <baseValue baseType="identifier">FEEDBACK-2</baseValue>                         </setOutcomeValue>                     </responseIf>                     <responseElse>                         <setOutcomeValue identifier="FEEDBACK-2">                             <baseValue baseType="identifier">FEEDBACK-3</baseValue>                         </setOutcomeValue>                     </responseElse>                 </responseCondition>             </responseElse>         </responseCondition>         <responseCondition>             <responseIf>                 <isNull>                     <variable identifier="RESPONSE_3" />                 </isNull>                 <setOutcomeValue identifier="SCORE">                     <sum>                         <variable identifier="SCORE" />                         <mapResponse identifier="RESPONSE_3" />                     </sum>                 </setOutcomeValue>             </responseIf>             <responseElse>                 <setOutcomeValue identifier="ITEMSCORE">                     <mapResponse identifier="RESPONSE_3" />                 </setOutcomeValue><setOutcomeValue identifier="SCORE">                     <sum>                         <variable identifier="SCORE" />                         <mapResponse identifier="RESPONSE_3" />                     </sum>                 </setOutcomeValue>                 <responseCondition>                     <responseIf>                         <gt>                             <variable identifier="ITEMSCORE" />                             <baseValue baseType="float">0</baseValue>                         </gt>                         <setOutcomeValue identifier="FEEDBACK-3">                             <baseValue baseType="identifier">FEEDBACK-4</baseValue>                         </setOutcomeValue>                     </responseIf>                     <responseElse>                         <setOutcomeValue identifier="FEEDBACK-3">                             <baseValue baseType="identifier">FEEDBACK-5</baseValue>                         </setOutcomeValue>                     </responseElse>                 </responseCondition>             </responseElse>         </responseCondition>         <responseCondition>             <responseIf>                 <isNull>                     <variable identifier="RESPONSE_4" />                 </isNull>                 <setOutcomeValue identifier="SCORE">                     <sum>                         <variable identifier="SCORE" />                         <mapResponse identifier="RESPONSE_4" />                     </sum>                 </setOutcomeValue>             </responseIf>             <responseElse>                 <setOutcomeValue identifier="ITEMSCORE">                     <mapResponse identifier="RESPONSE_4" />                 </setOutcomeValue>                 <setOutcomeValue identifier="SCORE">                     <sum>                         <variable identifier="SCORE" />                         <mapResponse identifier="RESPONSE_4" />                     </sum>                 </setOutcomeValue>                 <responseCondition>                     <responseIf>                         <gt>                             <variable identifier="ITEMSCORE" />                             <baseValue baseType="float">0</baseValue>                         </gt>                         <setOutcomeValue identifier="FEEDBACK-4">                             <baseValue baseType="identifier">FEEDBACK-6</baseValue>    </setOutcomeValue>  </responseIf>     <responseElse>   <setOutcomeValue identifier="FEEDBACK-4">  <baseValue baseType="identifier">FEEDBACK-7</baseValue>   </setOutcomeValue>  </responseElse>   </responseCondition> </responseElse> </responseCondition> <responseCondition><responseIf>  <and>  <isNull>                         <variable identifier="RESPONSE_1" />                     </isNull>                     <isNull>                         <variable identifier="RESPONSE_2" /></isNull><isNull><variable identifier="RESPONSE_3" /> </isNull> <isNull><variable identifier="RESPONSE_4" />  </isNull></and><setOutcomeValue identifier="SCORE"> <baseValue baseType="float">0.0</baseValue></setOutcomeValue></responseIf></responseCondition></responseProcessing> </assessmentItem>';
			 var Essay_Template = '<?xml version="1.0" encoding="UTF-8"?><assessmentItem title="01-4-01" timeDependent="false" adaptive="false" toolVersion="5.152.49.2" toolName="pegasus" label="01-4-01" identifier="QUESTION-9245641" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqti_v2p1 http://www.imsglobal.org/xsd/qti/qtiv2p1/imsqti_v2p1.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.imsglobal.org/xsd/imsqti_v2p1"><responseDeclaration cardinality="multiple" identifier=""><correctResponse interpretation="dsfsdfsdf"><value></value></correctResponse></responseDeclaration><outcomeDeclaration identifier="FEEDBACK" baseType="identifier" cardinality="single"/><outcomeDeclaration identifier="ITEMSCORE" baseType="float" cardinality="single"/><outcomeDeclaration identifier="SCORE" baseType="float" cardinality="single" normalMaximum="1"><defaultValue><value>0</value></defaultValue></outcomeDeclaration><outcomeDeclaration identifier="MAXSCORE" baseType="float" cardinality="single"><defaultValue><value>1</value></defaultValue></outcomeDeclaration><itemBody><blockquote><p></p></blockquote><extendedTextInteraction responseIdentifier="RESPONSE" expectedLines="10" expectedLength="1000"/></itemBody><responseProcessing><responseCondition><responseIf>-<not>-<isNull><variable identifier="RESPONSE"/></isNull></not><setOutcomeValue identifier="FEEDBACK"><baseValue baseType="identifier">FEEDBACK-1</baseValue></setOutcomeValue></responseIf></responseCondition></responseProcessing></assessmentItem>';
			 var FillInTheBlanks_Template = '<?xml version="1.0" encoding="UTF-8"?><assessmentItem title="FIB1" timeDependent="false" adaptive="false" toolVersion="5.152.49.2" toolName="pegasus" label="FIB1" identifier="QUESTION-1333938801" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqti_v2p1 http://www.imsglobal.org/xsd/qti/qtiv2p1/imsqti_v2p1.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.imsglobal.org/xsd/imsqti_v2p1"><responseDeclaration identifier="RESPONSE_1" baseType="string" cardinality="single"></responseDeclaration><outcomeDeclaration identifier="FEEDBACK-1" baseType="identifier" cardinality="single"/><outcomeDeclaration identifier="ITEMSCORE" baseType="float" cardinality="single"/><outcomeDeclaration identifier="SCORE" baseType="float" cardinality="single" normalMaximum="1"><defaultValue><value>0</value></defaultValue></outcomeDeclaration><outcomeDeclaration identifier="MAXSCORE" baseType="float" cardinality="single"><defaultValue><value>1</value></defaultValue></outcomeDeclaration><itemBody><blockquote><p></p></blockquote></itemBody><responseProcessing><responseCondition><responseIf><isNull><variable identifier="RESPONSE_1"/></isNull><setOutcomeValue identifier="SCORE"><mapResponse identifier="RESPONSE_1"/></setOutcomeValue></responseIf><responseElse><setOutcomeValue identifier="ITEMSCORE"><mapResponse identifier="RESPONSE_1"/></setOutcomeValue><setOutcomeValue identifier="SCORE"><mapResponse identifier="RESPONSE_1"/></setOutcomeValue><responseCondition><responseIf><gt><variable identifier="ITEMSCORE"/><baseValue baseType="float">0</baseValue></gt><setOutcomeValue identifier="FEEDBACK-1"><baseValue baseType="identifier">FEEDBACK-1C</baseValue></setOutcomeValue></responseIf><responseElse><setOutcomeValue identifier="FEEDBACK-1"><baseValue baseType="identifier">FEEDBACK-1W</baseValue></setOutcomeValue></responseElse></responseCondition></responseElse></responseCondition><responseCondition><responseIf><and><isNull><variable identifier="RESPONSE_1"/></isNull></and><setOutcomeValue identifier="SCORE"><baseValue baseType="float">0.0</baseValue></setOutcomeValue></responseIf></responseCondition></responseProcessing></assessmentItem>';
			 
			this.questionTemplates = function(qtiFormat) {

					var qtiXmlNode = [];				
					var nodes = [
									{ "qstnTemplate": MultipleChoice_Template, "quizType": "MultipleChoice"},
									{ "qstnTemplate": TrueFalse_Template , "quizType": "TrueFalse"},
									{ "qstnTemplate": FillInTheBlanks_Template , "quizType": "FillInBlanks"}	,									
									{ "qstnTemplate": MatchFollowing_Template , "quizType": "Matching"},
									{ "qstnTemplate": Essay_Template , "quizType": "Essay"},
									{ "qstnTemplate": MultipleResponse_Template , "quizType": "MultipleResponse"}
									
									
								]
					
					QTI.initialize();
					
					angular.forEach(nodes, function(item) {
						var displayNode = $("<div></div>");						
						QTI.Attribute.id = 1;		
						QTI.BLOCKQUOTE.id = 0;
						QTI.id=1;
						QTI.play(item.qstnTemplate, displayNode, true,true,item.quizType);	
						var node = {};
						node.qstnTemplate = true;
						node.optionsView = true;
						node.quizType=item.quizType;						
						node.data = item.qstnTemplate;
						node.textHTML = displayNode.html();
						node.template = 'questions_renderer.html';
						qtiXmlNode.push(node);
					})

					return qtiXmlNode;

				};
				
				
				
				
						
						
						
			       
			
		}]);			